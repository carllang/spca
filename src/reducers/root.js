import { configureStore } from '@reduxjs/toolkit';
import { animalsReducer } from './animals';
import { peopleReducer } from './people';
import { metaReducer } from './meta';

const store = configureStore({
  reducer: { animals: animalsReducer, people: peopleReducer, meta: metaReducer },
});

export default store;
