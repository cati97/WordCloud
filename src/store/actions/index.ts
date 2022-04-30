import { ActionType } from './actionTypes';
import { User } from 'utils/types/User';

export const login = (user: User) => ({
  type: ActionType.LOGIN,
  payload: user,
});
