/* eslint-disable no-console */
const express = require('express');
const onHeaders = require('on-headers');

const myAsync = () => new Promise(resolve => setTimeout(resolve, 1000, 'Hello World!'));
const myMiddleware = (req, res, next) => {
  const start = Date.now();
  onHeaders(res, () => {
    const end = Date.now();
    res.set('X-Response-Time', `${(end - start).toString()} ms`);
  });
  // res.set('X-Response-Time', '0 ms'); // NON-FUNCTIONAL
  next();
};
const app = express();
app.use(myMiddleware);
app.get('/', async (req, res) => {
  const body = [];
  body.push(await myAsync());
  body.push(await myAsync());
  res.send(body.join(' '));
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
