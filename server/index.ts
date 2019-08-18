import Koa from 'koa';
import Next from 'next';
import Router from 'koa-router';

const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  router.get('/:id', async (ctx: any) => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: '/',
      query: { id },
    });
    ctx.respond = false;
  });

  server.use(router.routes());

  server.use(async (ctx: any) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(
    3000,
    (): void => {
      console.log('koa server listening on 3000');
    },
  );
});
