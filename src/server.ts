import 'reflect-metadata';
import dotenv from 'dotenv';

import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

dotenv.config();

app.listen(3333, () => {
  console.log('server started on port 3333');
});
