const fs = require('fs');
const File = require('../models/File');

class FileService {
  createDir(req, dir) {
    const filePath = this.getPath(req, dir);
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
          return resolve({ message: 'File was created' });
        } else {
          return reject({ message: 'File already exist' });
        }
      } catch (e) {
        return reject({ message: 'File error' });
      }
    });
  }

  deleteFile(req, file) {
    const path = this.getPath(req, file);
    if (file.type === 'dir') {
      fs.rmdirSync(path);
    } else {
      fs.unlinkSync(path);
    }
  }

  renameFile(req, file, newFilePath) {
    const prevPath = this.getPath(req, file);
    const newPath = this.getPath(req, { user: file.user, path: newFilePath });
    fs.renameSync(prevPath, newPath);
  }

  getPath(req, file) {
    return req.serverPath + '\\files\\' + file.user + '\\' + file.path;
  }
}

module.exports = new FileService();
