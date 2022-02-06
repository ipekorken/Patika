const Koa = require("koa");
const app = new Koa();
const port = 3000;

app.use(async (ctx, next) => {
  if ("/" == ctx.path) {
    ctx.body = "<h1> WELCOME TO INDEX PAGE </h1>";
  } else {
    await next();
  }
});

app.use(async (ctx, next) => {
  if ("/about" == ctx.path) {
    ctx.body = "<h1> WELCOME TO ABOUT PAGE </h1>";
  } else {
    await next();
  }
});

app.use(async (ctx, next) => {
  if ("/contact" == ctx.path) {
    ctx.body = "<h1> WELCOME TO CONTACT PAGE </h1>";
  } else {
    await next();
  }
});

app.listen(port, () => {
  console.log(`Sunucumuz ${port} portuna bağlandı.`);
});
