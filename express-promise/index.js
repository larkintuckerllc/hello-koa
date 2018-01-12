/* eslint-disable no-console */
const express = require('express');

const myAsync = () => new Promise(resolve => setTimeout(resolve, 1000, 'Hello World!'));
const app = express();
app.get('/', (req, res) => {
  const body = [];
  myAsync()
    .then(value => body.push(value))
    .then(myAsync)
    .then(value => body.push(value))
    .then(() => res.send(body.join(' ')));
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
