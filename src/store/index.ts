import { createStore } from 'redux';
import userReducer from './reducers/userReducer';
import { GameState } from './store.types';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state: GameState | undefined) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.error(e);
  }
};

const persistedState = loadState();

export const store = createStore(userReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});
