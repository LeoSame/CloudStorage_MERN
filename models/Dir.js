const { model, Schema, ObjectId } = require('mongoose');

const Dir = new Schema({
  name: { type: String, required: true },
  type: { type: String, default: 'dir' },
  isFavorite: { type: Boolean, default: false },
  accessLink: { type: String },
  isEmpty: { type: Boolean, default: true },
  size: { type: Number, default: 0 },
  path: { type: String, default: '' },
  date: { type: Date, default: Date.now() },
  user: { type: ObjectId, ref: 'User' },
  parent: { type: ObjectId, ref: 'Dir' },
  childDirs: [{ type: ObjectId, ref: 'Dir' }],
  childFiles: [{ type: ObjectId, ref: 'File' }],
});

module.exports = model('Dir', Dir);
