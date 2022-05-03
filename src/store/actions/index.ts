import { ActionType } from './actionTypes';
import { User } from 'utils/types/User';

export const login = (user: User) => ({
  type: ActionType.LOGIN,
  payload: user,
});

export const updateUserScore = (user: User) => ({
  type: ActionType.UPDATE_USER_SCORE,
  payload: user,
});
