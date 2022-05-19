const { model, Schema } = require('mongoose');

const FilesCount = new Schema({
  filesCount: { type: Number, required: true },
});

module.exports = model('FilesCount', FilesCount);
