import { configureStore } from '@reduxjs/toolkit';
import { animalsReducer } from './animals';

const store = configureStore({
  reducer: animalsReducer,
});

export default store;
