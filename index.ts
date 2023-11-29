import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import { routes } from './routes';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use('/', routes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
});