import { createAction } from '@reduxjs/toolkit';

export const FETCH_KENNELS_SUCCESS = createAction('FETCH_KENNELS_SUCCESS');
export const FETCH_KENNELS_PENDING = createAction('FETCH_KENNELS_PENDING');
export const FETCH_KENNELS_ERROR = createAction('FETCH_KENNELS_ERROR');
