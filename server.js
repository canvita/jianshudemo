const express = require('express');

const app = express();

app.use(express.static('dist'));
const server = app.listen(2334, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});