const { Schema, model, ObjectId } = require('mongoose');

const User = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
  gender: { type: String },
  favorites: [{ type: ObjectId, ref: ['File', 'Dir'], default: [] }],
  files: [{ type: ObjectId, ref: 'File' }],
});

module.exports = model('User', User);
