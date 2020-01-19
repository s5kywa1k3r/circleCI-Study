import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';

const checkRouter = Router();

checkRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../../views/check/check.html'));
});

export default checkRouter;
