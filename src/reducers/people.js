/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createReducer } from '@reduxjs/toolkit';
import request from 'superagent';
import { FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_PENDING, FETCH_PEOPLE_ERROR } from '../actions';
import authHeader from '../auth/AuthHeader';

const initialState = {
  data: null,
  pending: false,
  error: false,
};
export const peopleReducer = createReducer(initialState, {
  [FETCH_PEOPLE_SUCCESS]: (state, action) => {
    state.data = action.payload;
    state.pending = false;
  },
  [FETCH_PEOPLE_PENDING]: (state) => {
    state.pending = true;
    state.error = false;
  },
  [FETCH_PEOPLE_ERROR]: (state, action) => {
    state.error = action.payload;
    state.pending = false;
  },
});

const fetchData = async () => {
  const headers = authHeader();
  try {
    const r = await request.get('http://localhost:4000/api/v1/people').set(headers);
    return r.body;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchThunk = () => async (dispatch) => {
  try {
    dispatch(FETCH_PEOPLE_PENDING());
    const result = await fetchData(null, { signal: null });
    dispatch(FETCH_PEOPLE_SUCCESS(result));
  } catch (e) {
    dispatch(FETCH_PEOPLE_ERROR({ payload: e.message }));
  }
};
