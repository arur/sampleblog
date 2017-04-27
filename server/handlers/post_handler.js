const Post = require('../model/posts');

module.exports = {
  getAllPosts (req, res, next) {
    Post.find()
      .then(posts => res.send(posts))
      .catch(next);
  },
  createPost (req, res, next) {
    const postProps = req.body;
    console.log(postProps);

    Post.create(postProps)
      .then(post => res.send(post))
      .catch(next);
  }

};
