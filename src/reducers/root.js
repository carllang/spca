import { configureStore } from '@reduxjs/toolkit';
import { kennelsReducer } from './kennels';

const store = configureStore({
  reducer: kennelsReducer,
});

export default store;
