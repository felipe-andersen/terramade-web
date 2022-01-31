import * as React from 'react';
import { combineReducers, createStore } from "redux";
import { homePropertiesAndStylesReducer } from './screens/home/homePropertiesAndStyles/reducer';
import { IGlobalState } from './interfaces';


export const Reducers = combineReducers(
  {
    homeReducer: homePropertiesAndStylesReducer,
  }
);

export type RootState = ReturnType<typeof Reducers>

export const store = createStore(Reducers);