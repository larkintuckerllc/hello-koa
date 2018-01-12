const Koa = require('koa');

const myAsync = () => new Promise(resolve => setTimeout(resolve, 1000, 'Hello World!'));
const app = new Koa();
app.use(async (ctx) => {
  const body = [];
  body.push(await myAsync());
  body.push(await myAsync());
  ctx.body = body.join([' ']);
});
app.listen(3000);
