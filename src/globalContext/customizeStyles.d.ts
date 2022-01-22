import React from "react";
import { postsContext } from "./postsContext";
import { MyThemes, IStatusGlobalPropertiesAndStyles } from "./globalTheme";
import {} from "styled-components";


declare module "styled-components" {
    export interface DefaultTheme {
        language: string,
        homeScreen: {
          headerPropertiesAndStyles: { 
            resetInputLabel: string,
            notificationBtnTitle: string,
            ModalDisplay: string,
          }
        }
    }
}


export const Theme = {
  language: "ptBR",
    homeScreen: {
      headerPropertiesAndStyles: { 
      resetInputLabel: "none",
      notificationBtnTitle: "Notification",
      ModalDisplay: "flex"
    }
  }      
}
  







