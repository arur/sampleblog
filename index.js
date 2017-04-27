const server = require('./server');
const PORT = process.env.PORT || 3050;

server.listen(PORT, () => {
  console.log('Server is running at ', PORT);
});
