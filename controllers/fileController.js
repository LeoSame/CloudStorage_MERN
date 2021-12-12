const fileService = require('../services/fileService');
const fs = require('fs');
const Uuid = require('uuid');
const User = require('../models/User');
const File = require('../models/File');

class FileController {
  async creqteDir(req, res) {
    try {
      const { name, type } = req.body;
      let parentId = req.body.parent;

      if (parentId === 'root') {
        parentId = undefined;
      }
      const file = new File({ name, type, parent: parentId, user: req.user.id });
      const parentFile = await File.findOne({ _id: parentId });
      if (!parentFile) {
        file.path = name;
        await fileService.createDir(req, file);
      } else {
        file.path = `${parentFile.path}\\${file.name}`;
        await fileService.createDir(req, file);
        parentFile.childs.push(file._id);
        parentFile.isEmpty = false;
        await parentFile.save();
      }
      await file.save();
      return res.json(file);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async getFiles(req, res) {
    try {
      const sort = req.query.sort;
      let parentId = req.query.parent;

      if (parentId === 'root') {
        parentId = undefined;
      }

      let files;
      switch (sort) {
        case 'name':
          files = await File.find({ user: req.user.id, parent: parentId }).sort({ name: 1 });
          break;
        case 'type':
          files = await File.find({ user: req.user.id, parent: parentId }).sort({ type: 1 });
          break;
        case 'date':
          files = await File.find({ user: req.user.id, parent: parentId }).sort({ date: 1 });
          break;
        case 'size':
          files = await File.find({ user: req.user.id, parent: parentId }).sort({ size: 1 });
          break;
        default:
          files = await File.find({ user: req.user.id, parent: parentId });
          break;
      }

      let dir = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type === 'dir') {
          dir.push(file);
          delete files[i];
        }
      }
      return res.json([...dir, ...files.filter(x => x)]);
    } catch (e) {
      return res.status(500).json({ message: 'Can not get files' });
    }
  }

  async uploadFile(req, res) {
    try {
      const file = req.files.file;
      let parentId = req.body.parent;

      if (parentId === 'root') {
        parentId = undefined;
      }

      const parent = await File.findOne({ user: req.user.id, _id: parentId });
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

      let filePath = file.name;
      if (parent) {
        filePath = parent.path + '\\' + file.name;
        parent.isEmpty = false;
        await parent.save();
      }
      const dbFile = new File({
        name: file.name,
        type,
        size: file.size,
        path: filePath,
        parent: parent ? parent._id : null,
        user: user._id,
      });

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
      const fileId = req.query.id;
      const file = await File.findOne({ _id: fileId, user: userId });
      const parent = file.parent;

      if (!file) {
        return res.status(400).json({ message: 'file not found' });
      }

      fileService.deleteFile(req, file);
      await file.remove();

      if (parent) {
        const parentFile = await File.findOne({ _id: parent, user: userId });

        const parentChilds = parentFile.childs.filter(c => c != fileId);
        parentFile.childs = parentChilds;

        if (parentFile.childs.length === 0) {
          parentFile.isEmpty = true;
        }

        await parentFile.save();
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
      let files = await File.find({ user: req.user.id });
      files = files.filter(file => {
        return file.name.toLowerCase().includes(searchName);
      });
      return res.json(files);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Serarch error' });
    }
  }

  async renameFile(req, res) {
    try {
      const userId = req.user.id;
      const { id, name } = req.query.id;
      const file = await File.findOne({ _id: id, user: userId });
      file.name = name;
      file.save();

      return res.json(file);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Serarch error' });
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

module.exports = new FileController();
