/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createReducer } from '@reduxjs/toolkit';
import { TOGGLE_PEOPLE_LIST_VIEW, TOGGLE_ANIMALS_LIST_VIEW } from '../actions';

const initialState = {
  listView: {
    people: 'block',
    animals: 'block',
  },
};

export const metaReducer = createReducer(initialState, {
  [TOGGLE_PEOPLE_LIST_VIEW]: (state, { payload }) => {
    state.listView.people = payload;
  },
  [TOGGLE_ANIMALS_LIST_VIEW]: (state, { payload }) => {
    state.listView.animals = payload;
  },
});
