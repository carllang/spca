import { configureStore } from '@reduxjs/toolkit';
import { animalsReducer } from './animals';
import { peopleReducer } from './people';
import { metaReducer } from './meta';
import { filterReducer } from './filter';

const store = configureStore({
  reducer: {
    animals: animalsReducer, people: peopleReducer, meta: metaReducer, filters: filterReducer,
  },
});

export default store;
