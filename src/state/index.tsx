import * as React from 'react';
import { combineReducers, createStore } from "redux";
import { homePropertiesAndStylesReducer } from './templates/home/controllers/reducer';
import { IGlobalState } from './schemes';


export const Reducers = combineReducers(
  {
    homeReducer: homePropertiesAndStylesReducer,
  }
);

export type RootState = ReturnType<typeof Reducers>

export const store = createStore(Reducers);