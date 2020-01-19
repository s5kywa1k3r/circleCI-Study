import { Router, Request, Response, NextFunction } from 'express';
import * as path from 'path';

const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../../views/router/index.html'));
});

export default mainRouter;
