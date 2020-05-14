import {parse} from 'url';
import {Application} from 'express';

import {getScenePage} from './controllers/pages/scene';
import {getAdventurePageData} from './controllers/data/adventures';
import {getTagPageData} from './controllers/data/tags';

export default (app: Application) => {
    app.get('/api/scenes*', getScenePage);
    app.get('/api/adventures*', getAdventurePageData);
    app.get('/api/tags*', getTagPageData);

    app.all('*', (req, res) => {
        const handleRequest = req.nextApp.getRequestHandler();
        const parsedUrl = parse(req.url, true);

        return handleRequest(req, res, parsedUrl);
    });
};
