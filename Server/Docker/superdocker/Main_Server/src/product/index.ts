import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import { callApp } from './callApp.service';

const productRouter = Router();

productRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title) {
        return res
            .status(200)
            .sendFile(path.join(__dirname, '../../views/product/productBase.html'));
    }
});

productRouter.get('/search', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title || typeof req.query.title !== 'string') {
        return res.send('Error!! There is no Query String');
    }
    const result = await callApp({ search_word: req.query.title });
    return res.status(200).json(result);
});

export default productRouter;
