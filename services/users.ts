import { faker } from '@faker-js/faker';
import { FAV_FOODS, FAV_MOVIES, STATUS } from "../utils/constants";
import { User } from '../types/users';

export function createRandomUsers(): User {
  return {
    _id: faker.string.uuid(),
    date: faker.date.recent(),
    name: faker.person.firstName(),
    favFood: faker.helpers.arrayElement(FAV_FOODS),
    favMovie: faker.helpers.arrayElement(FAV_MOVIES),
    status: faker.helpers.arrayElement(STATUS)
  };
};

export function generateOwnUser(): User {
  return {
    _id: faker.string.uuid(),
    date: new Date(),
    name: 'Ruben',
    favFood: 'Pizza',
    favMovie: 'Interstellar',
    status: 'Active'
  }
};