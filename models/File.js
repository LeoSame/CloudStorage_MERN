const { model, Schema, ObjectId } = require('mongoose');

const File = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  isFavorite: { type: Boolean, default: false },
  accessLink: { type: String },
  size: { type: Number, default: 0 },
  path: { type: String, default: '' },
  date: { type: Date, default: Date.now() },
  user: { type: ObjectId, ref: 'User' },
  parent: { type: ObjectId, ref: 'Dir' },
});

module.exports = model('File', File);
