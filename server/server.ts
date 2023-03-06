import app from '../source/app';
const server = app
const port = 3000

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})