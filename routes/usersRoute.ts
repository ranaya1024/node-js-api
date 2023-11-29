import express from 'express';
import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { User } from '../types/users';
import {createRandomUsers, generateOwnUser} from '../services/users';
import { filterActiveUsers, sortDataByKey } from '../utils';

export const usersRoute = express.Router();

// Main users route
usersRoute.get('/users', async (req: Request, res: Response) => {
  const usersToGenerate = Number(process.env.USERS_AMOUNT) ?? 10;
  // Generating data with the same structure
  const customUser: User[] = faker.helpers.multiple(generateOwnUser, {
    count: 1,
  });
  const randomUserList: User[] = faker.helpers.multiple(createRandomUsers, {
    count: usersToGenerate,
  });

  // Contact my user with randomly generated data
  const userList = customUser.concat(randomUserList);

  // Logging active users only into the console
  const activeUsers = (await filterActiveUsers(userList))
    .map(({name, date, favMovie}: User) => ({
    name,
    date,
    favMovie
  }));
  console.table(activeUsers);

  // Capture sortBy parameter
  const sortBy = req.query.sortBy as string;

  // Return sorted values based on received parameter
  if(sortBy) {
    const sortedResults = sortDataByKey(userList, sortBy);
    res.send(sortedResults);
  } else {
    res.send(userList);
  }

});
