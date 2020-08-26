/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createReducer } from '@reduxjs/toolkit';
import { FETCH_KENNELS_SUCCESS, FETCH_KENNELS_PENDING, FETCH_KENNELS_ERROR } from '../actions';

const initialState = {
  kennels: null,
  pending: false,
  error: false,
};
export const kennelsReducer = createReducer(initialState, {
  [FETCH_KENNELS_SUCCESS]: (state, action) => {
    state.kennels = action.payload;
    state.pending = false;
  },
  [FETCH_KENNELS_PENDING]: (state) => {
    state.pending = true;
    state.error = false;
  },
  [FETCH_KENNELS_ERROR]: (state, action) => {
    state.error = action.payload;
    state.pending = false;
  },
});

const fetchData = async (props, { signal }) => {
  const response = await fetch('http://localhost:3001/kennels', { signal });
  if (!response.ok) throw new Error(response.status);
  return response.json();
};
export const fetchThunk = () => async (dispatch) => {
  try {
    dispatch(FETCH_KENNELS_PENDING());
    const result = await fetchData(null, { signal: null });
    dispatch(FETCH_KENNELS_SUCCESS(result));
  } catch (e) {
    dispatch(FETCH_KENNELS_ERROR({ payload: 'Error occured' }));
  }
};
