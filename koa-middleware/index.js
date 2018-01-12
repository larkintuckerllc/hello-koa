const Koa = require('koa');

const myAsync = () => new Promise(resolve => setTimeout(resolve, 1000, 'Hello World!'));
const myMiddleware = async (ctx, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  ctx.set('X-Response-Time', `${(end - start).toString()} ms`);
};
const app = new Koa();
app.use(myMiddleware);
app.use(async (ctx) => {
  const body = [];
  body.push(await myAsync());
  body.push(await myAsync());
  ctx.body = body.join([' ']);
});
app.listen(3000);
