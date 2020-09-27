import { createAction } from '@reduxjs/toolkit';

export const FETCH_ANIMALS_SUCCESS = createAction('FETCH_ANIMALS_SUCCESS');
export const FETCH_ANIMALS_PENDING = createAction('FETCH_ANIMALS_PENDING');
export const FETCH_ANIMALS_ERROR = createAction('FETCH_ANIMALS_ERROR');

export const FETCH_KENNELS_SUCCESS = createAction('FETCH_KENNELS_SUCCESS');
export const FETCH_KENNELS_PENDING = createAction('FETCH_KENNELS_PENDING');
export const FETCH_KENNELS_ERROR = createAction('FETCH_KENNELS_ERROR');

export const FETCH_PEOPLE_SUCCESS = createAction('FETCH_PEOPLE_SUCCESS');
export const FETCH_PEOPLE_PENDING = createAction('FETCH_PEOPLE_PENDING');
export const FETCH_PEOPLE_ERROR = createAction('FETCH_PEOPLE_ERROR');
