import { configureStore } from '@reduxjs/toolkit';
import { animalsReducer } from './animals';
import { peopleReducer } from './people';

const store = configureStore({
  reducer: { animals: animalsReducer, people: peopleReducer },

});

export default store;
