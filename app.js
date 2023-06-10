const koa = require('koa')

const app = new koa()
const port = 5001

app.use(ctx => {
    ctx.body = 'Wena Tomo, esta mamada funciona';
  });

app.listen(port, () => {
    console.log(`Listening in port ${port}`)
})