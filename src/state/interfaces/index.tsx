import * as React from "react";
import { IHomePropertiesAndStyles } from "../screens/home";

export interface IGlobalState {
  screens: IScreensGlobalState
};

export interface IScreensGlobalState {
  home:{
    dataFeeder: {};
    homePropertiesAndStyles:IHomePropertiesAndStyles
    };
  logIn:{
    dataFeeder: {};
    homePropertiesAndStyles:IHomePropertiesAndStyles
  }
};
  
