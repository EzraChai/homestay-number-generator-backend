"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter(), {
        cors: {
            origin: ['https://cshomestay-passcode.vercel.app/'],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        },
    });
    console.log(`App listen at PORT ${process.env.PORT}`);
    const port = process.env.PORT || 3000
    const host = process.env.HOST || '0.0.0.0';
    const start = async () => {
        try {
            await app.listen(port, host);
        }
        catch (err) {
            process.exit(1);
        }
    };
    start();
}
bootstrap();
//# sourceMappingURL=main.js.map