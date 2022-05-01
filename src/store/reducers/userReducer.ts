import { UserAction, GameState } from 'store/store.types';
import { ActionType } from '../actions/actionTypes';

const initialState: GameState = {
  user: null,
};

const userReducer = (state = initialState, action: UserAction) => {
  console.log(action);
  switch (action.type) {
    case ActionType.LOGIN:
      return { ...state, user: action.payload };
    case ActionType.UPDATE_USER_SCORE:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
