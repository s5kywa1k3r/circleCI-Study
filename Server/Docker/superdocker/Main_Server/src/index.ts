import bodyParser from 'body-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { join } from 'path';
import checkRouter from './check';
import productRouter from './product';
import mainRouter from './router';
import * as path from 'path';

const app = express();
app.use(bodyParser.json());

// view 경로 설정
app.use(express.static('../views'));

// router 세팅
app.use('/', mainRouter);
app.use('/check', checkRouter, express.static(path.join(__dirname, '../views/check')));
app.use('/product', cors(), productRouter);

// 3000 포트 개방
app.listen(3000);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.sendFile(join(__dirname, '../views/error.html'));
});
