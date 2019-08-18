"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const next_1 = __importDefault(require("next"));
const koa_router_1 = __importDefault(require("koa-router"));
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = new koa_1.default();
    const router = new koa_router_1.default();
    router.get('/:id', async (ctx) => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: '/',
            query: { id },
        });
        ctx.respond = false;
    });
    server.use(router.routes());
    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });
    server.listen(3000, () => {
        console.log('koa server listening on 3000');
    });
});
//# sourceMappingURL=index.js.map