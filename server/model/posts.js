const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;