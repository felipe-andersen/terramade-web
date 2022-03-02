import * as React from "react";
import {Dispatch} from "redux";
import { ProtocolControllers } from "../..";

export enum ActionsCatalog {
  SET_HOME_TEMPLATE = "SET_HOME_TEMPLATE",

};

export interface IActionsHomePropertiesAndStyles {
  type: ActionsCatalog.SET_HOME_TEMPLATE,
  payload: ProtocolControllers
};

export const ActionsHomePropertiesAndStyles = (homePropertiesAndStyles:ProtocolControllers ) => {
  return{
    type: ActionsCatalog.SET_HOME_TEMPLATE,
    payload: homePropertiesAndStyles
  }
}
