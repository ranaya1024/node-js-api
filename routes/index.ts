import express from 'express';
import { defaultRoute } from './defaultRoute';
import {usersRoute} from './usersRoute';

export const routes = express.Router();

routes.use(defaultRoute);
routes.use(usersRoute);