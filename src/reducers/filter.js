/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createReducer } from '@reduxjs/toolkit';
import {
  SET_ANIMAL_NAME_FILTER,
  SET_ANIMAL_AGE_FILTER,
  SET_ANIMAL_GENDER_FILTER,
  SET_ANIMAL_BREED_FILTER,
  SET_ANIMAL_SPECIES_FILTER,
  SET_ANIMAL_CREATED_FILTER,
} from '../actions';

const initialState = {
  animals: {
    name: '',
    age: '',
    gender: '',
    breed: '',
    species: '',
    created: '',
  },
};

export const filterReducer = createReducer(initialState, {
  [SET_ANIMAL_NAME_FILTER]: (state, { payload }) => {
    state.animals.name = payload;
  },
  [SET_ANIMAL_AGE_FILTER]: (state, { payload }) => {
    state.animals.age = payload;
  },
  [SET_ANIMAL_GENDER_FILTER]: (state, { payload }) => {
    state.animals.gender = payload;
  },
  [SET_ANIMAL_BREED_FILTER]: (state, { payload }) => {
    state.animals.breed = payload;
  },
  [SET_ANIMAL_SPECIES_FILTER]: (state, { payload }) => {
    state.animals.species = payload;
  },
  [SET_ANIMAL_CREATED_FILTER]: (state, { payload }) => {
    state.animals.created = payload;
  },
});
