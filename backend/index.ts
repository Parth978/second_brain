import express, { type Request, type Response } from 'express';
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import authRouter from './routes/auth.route';
import contentRouter from './routes/content.route';
import shareRouter from './routes/share.route';

const app = express();
app.use('api/v1/auth', authRouter);
app.use('api/v1/content', contentRouter);
app.use('api/v1/Share', shareRouter);


app.listen(process.env.PORT || 3001, () => {
    console.log(`Server started on port:${process.env.PORT || 3001}`);
})