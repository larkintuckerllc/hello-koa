'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
app.use(async ctx => {
  ctx.body = 'Hello World';
});
app.listen(3000);