/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createReducer } from '@reduxjs/toolkit';
import request from 'superagent';
import {
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_PENDING,
  FETCH_ANIMALS_ERROR,
} from '../actions';
import authHeader from '../auth/AuthHeader';

const initialState = {
  data: [],
  pending: false,
  error: false,
};
export const animalsReducer = createReducer(initialState, {
  [FETCH_ANIMALS_SUCCESS]: (state, action) => {
    state.data = action.payload;
    state.pending = false;
  },
  [FETCH_ANIMALS_PENDING]: (state) => {
    state.pending = true;
    state.error = false;
  },
  [FETCH_ANIMALS_ERROR]: (state, action) => {
    state.error = action.payload;
    state.pending = false;
  },
});

const fetchData = async () => {
  const headers = authHeader();
  try {
    const r = await request
      .get('http://localhost:4000/api/v1/animals')
      .set(headers);
    return r.body;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchThunk = () => async (dispatch) => {
  try {
    dispatch(FETCH_ANIMALS_PENDING());
    const result = await fetchData(null, { signal: null });
    setTimeout(async () => {
      dispatch(FETCH_ANIMALS_SUCCESS(result));
    }, 1000);
  } catch (e) {
    dispatch(FETCH_ANIMALS_ERROR({ payload: e.message }));
  }
};
