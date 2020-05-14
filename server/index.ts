import path from 'path';

import express, {NextFunction as Next, Request, Response}  from 'express';
import config from 'config';
import nextjs from 'next';
import 'isomorphic-fetch';

import render from 'middlewares/render';
import connectDB from 'database';
import routes from 'routes';

const nextApp = nextjs({dev: process.env.NODE_ENV !== 'production'});

const publicDir = path.join(__dirname, 'public');

const app = express();

app.use(express.static(publicDir));

app.use(render(nextApp));
app.use(express.json());
routes(app);

app.use((err: Error, _req: Request, res: Response, _next: Next) => {
    console.error(err.stack);

    res.sendStatus(500);
});

connectDB().then(() => {
    nextApp.prepare().then(() => {
        const port = config.get('port') || 3000;

        app.listen(port, () => {
            console.info(`Server started on ${port}`);
            console.info(`Open http://localhost:${port}/`);
        });
    });
});
