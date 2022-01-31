import * as React from "react";
import {Dispatch} from "redux";
import { IHomePropertiesAndStyles } from "../..";

export enum ActionsCatalog {
  SET_HOME_TEMPLATE = "SET_HOME_TEMPLATE",

};

export interface IActionsHomePropertiesAndStyles {
  type: ActionsCatalog.SET_HOME_TEMPLATE,
  payload: IHomePropertiesAndStyles
};

export const ActionsHomePropertiesAndStyles = (homePropertiesAndStyles:IHomePropertiesAndStyles ) => {
  /*return (dispatch:Dispatch<IActionsHomePropertiesAndStyles>) => {
    dispatch(*/
  return{
    type: ActionsCatalog.SET_HOME_TEMPLATE,
    payload: homePropertiesAndStyles
  }
}
