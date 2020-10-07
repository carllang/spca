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

export const TOGGLE_PEOPLE_LIST_VIEW = createAction('TOGGLE_PEOPLE_LIST_VIEW');
export const TOGGLE_ANIMALS_LIST_VIEW = createAction('TOGGLE_ANIMALS_LIST_VIEW');

export const SET_ANIMAL_NAME_FILTER = createAction('SET_ANIMAL_NAME_FILTER');
export const SET_ANIMAL_AGE_FILTER = createAction('SET_ANIMAL_AGE_FILTER');
export const SET_ANIMAL_GENDER_FILTER = createAction('SET_ANIMAL_GENDER_FILTER');
export const SET_ANIMAL_BREED_FILTER = createAction('SET_ANIMAL_BREED_FILTER');
export const SET_ANIMAL_SPECIES_FILTER = createAction('SET_ANIMAL_SPECIES_FILTER');
export const SET_ANIMAL_CREATED_FILTER = createAction('SET_ANIMAL_CREATED_FILTER');
