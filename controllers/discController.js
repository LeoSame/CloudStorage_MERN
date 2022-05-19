const fileService = require('../services/fileService');
const fs = require('fs');
const Uuid = require('uuid');
const User = require('../models/User');
const File = require('../models/File');
const Dir = require('../models/Dir');
const FilesCount = require('../models/FilesCount');
const { getPath } = require('../services/fileService');

class DiscController {
  async getFilesCount(req, res) {
    try {
      let filesCount = await FilesCount.findOne();
      if (!filesCount) {
        filesCount = new FilesCount({ filesCount: 1234567891 });
      } else {
        const random = Math.floor(Math.random() * (15 - 1) + 1);
        filesCount.filesCount += random;
      }

      await filesCount.save();
      return res.json(filesCount);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async createDir(req, res) {
    try {
      const { name } = req.body;
      const userId = req.user.id;
      let parentId = req.body.parent;

      if (parentId === 'root') {
        parentId = undefined;
      }
      const dir = new Dir({ name, parent: parentId, user: userId });

      const parentDir = await Dir.findOne({ _id: parentId, user: userId });

      if (!parentDir) {
        dir.path = dir._id;
        await fileService.createDir(req, dir);
      } else {
        dir.path = `${parentDir.path}\\${dir._id}`;
        await fileService.createDir(req, dir);
        parentDir.childDirs.push(dir._id);
        parentDir.isEmpty = false;
        await parentDir.save();
      }

      await dir.save();
      return res.json(dir);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async getFiles(req, res) {
    try {
      const sort = req.query.sort;
      const sortBy = req.query.sortby;
      let parentId = req.query.parent;

      if (parentId === 'root') {
        parentId = undefined;
      }

      let dirs;
      let files;
      switch (sort) {
        case 'name':
          dirs = await Dir.find({ user: req.user.id, parent: parentId }).sort({ name: sortBy });
          files = await File.find({ user: req.user.id, parent: parentId }).sort({ name: sortBy });
          break;
        case 'type':
          dirs = await Dir.find({ user: req.user.id, parent: parentId }).sort({ type: sortBy });
          files = await File.find({ user: req.user.id, parent: parentId }).sort({ type: sortBy });
          break;
        case 'date':
          dirs = await Dir.find({ user: req.user.id, parent: parentId }).sort({ date: sortBy });
          files = await File.find({ user: req.user.id, parent: parentId }).sort({ date: sortBy });
          break;
        case 'size':
          dirs = await Dir.find({ user: req.user.id, parent: parentId }).sort({ size: sortBy });
          files = await File.find({ user: req.user.id, parent: parentId }).sort({ size: sortBy });
          break;
        default:
          dirs = await Dir.find({ user: req.user.id, parent: parentId });
          files = await File.find({ user: req.user.id, parent: parentId });
          break;
      }
      return res.json([...dirs, ...files]);
    } catch (e) {
      return res.status(500).json({ e, message: 'Can not get files' });
    }
  }

  async uploadFile(req, res) {
    try {
      const file = req.files.file;
      let parentId = req.body.parent;

      if (parentId === 'root') {
        parentId = undefined;
      }

      let parent = await Dir.findOne({ user: req.user.id, _id: parentId });
      const user = await User.findOne({ _id: req.user.id });

      if (user.usedSpace + file.size > user.diskSpace) {
        return res.status(400).json({ message: 'There no space on the disk' });
      }

      user.usedSpace = user.usedSpace + file.size;

      let path;
      if (parent) {
        path = `${req.serverPath}\\files\\${user._id}\\${parent.path}\\${file.name}`;
      } else {
        path = `${req.serverPath}\\files\\${user._id}\\${file.name}`;
      }

      if (fs.existsSync(path)) {
        return res.status(400).json({ message: 'File already exist' });
      }
      file.mv(path);

      const type = file.name.split('.').pop();

      const dbFile = new File({
        name: file.name,
        type,
        size: file.size,
        parent: parent ? parent._id : null,
        user: user._id,
      });

      if (parent) {
        dbFile.path = parent.path + '\\' + file.name;

        parent.isEmpty = false;
        parent.childFiles.push(dbFile._id);
        await parent.save();
      } else {
        dbFile.path = file.name;
      }

      await dbFile.save();
      await user.save();

      res.json(dbFile);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Upload error' });
    }
  }

  async downloadFile(req, res) {
    try {
      const file = await File.findOne({ _id: req.query.id, user: req.user.id });
      const path = fileService.getPath(req, file);
      if (fs.existsSync(path)) {
        return res.download(path, file.name);
      }
      return res.status(400).json({ message: 'File  not found' });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Download error' });
    }
  }

  async deleteFile(req, res) {
    try {
      const userId = req.user.id;
      const { fileId, type } = req.query;
      let file;
      if (type === 'dir') {
        file = await Dir.findOne({ _id: fileId, user: userId });
      } else {
        file = await File.findOne({ _id: fileId, user: userId });
      }
      const parent = file.parent;

      if (!file) {
        return res.status(400).json({ message: 'file not found' });
      }

      fileService.deleteFile(req, file);
      await file.remove();

      if (parent) {
        const parentDir = await Dir.findOne({ _id: parent, user: userId });

        const parentDirs = parentDir.childDirs.filter(c => c != fileId);
        parentDir.childDirs = parentDirs;
        const parentFiles = parentDir.childFiles.filter(c => c != fileId);
        parentDir.childFiles = parentFiles;

        if (parentDir.childDirs.length === 0 && parentDir.childFiles.length === 0) {
          parentDir.isEmpty = true;
        }

        await parentDir.save();
      }

      return res.json('File was deleted');
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Dir is not empty' });
    }
  }

  async searchFile(req, res) {
    try {
      const searchName = req.query.search.toLowerCase();

      let dirs = await Dir.find({ user: req.user.id });
      dirs = dirs.filter(dir => {
        return dir.name.toLowerCase().includes(searchName);
      });

      let files = await File.find({ user: req.user.id });
      files = files.filter(file => {
        return file.name.toLowerCase().includes(searchName);
      });
      return res.json([...dirs, ...files]);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Search error' });
    }
  }

  async renameFile(req, res) {
    try {
      const userId = req.user.id;
      const { id, name, type } = req.body;
      if (type === 'dir') {
        const dir = await Dir.findOne({ _id: id, user: userId });
        dir.name = name;
        await dir.save();

        return res.json(dir);
      } else {
        const file = await File.findOne({ _id: id, user: userId });
        let newFilePath = file.path.split('\\');
        newFilePath[newFilePath.length - 1] = name;
        newFilePath = newFilePath.join('\\');

        fileService.renameFile(req, file, newFilePath);

        file.name = name;
        file.path = newFilePath;
        await file.save();

        return res.json(file);
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Rename error' });
    }
  }

  async uploadAvatar(req, res) {
    try {
      const file = req.files.file;
      const user = await User.findById(req.user.id);
      const avatarName = Uuid.v4() + '.jpg';
      file.mv(req.serverPath + '\\static\\' + avatarName);
      user.avatar = avatarName;
      await user.save();
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Upload avatar error' });
    }
  }

  async deleteAvatar(req, res) {
    try {
      const user = await User.findById(req.user.id);
      fs.unlinkSync(req.serverPath + '\\static\\' + user.avatar);
      user.avatar = null;
      await user.save();
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Delete avatar error' });
    }
  }
}

module.exports = new DiscController();
