import sortBy from 'lodash/sortBy';
import { User } from "../types/users";

// Method to filter active users based on status
export const filterActiveUsers = async (users: User[]): Promise<User[]> => 
  users.filter((user: User) => user.status === 'Active');

export const sortDataByKey = (items: User[], key = '') => {

  // Getting all possible sort keys from the query string param
  const sortKeys = key.split(',');
  const sortedResult = sortBy(items, sortKeys);

  console.info("Sorted results by: ", sortKeys);
  console.table(sortedResult);
  return sortedResult;
}