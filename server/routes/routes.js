const PostHandler = require('../handlers/post_handler');

module.exports = (app) => {
  console.log('router');
  app.get('/api/posts', PostHandler.getAllPosts);
  app.post('/api/posts', PostHandler.createPost);
};
