import { User } from 'utils/types/User';
import { ActionType } from './actions/actionTypes';

export type GameState = {
  user: User | null;
};

export type UserAction = {
  type: ActionType;
  payload: User;
};
