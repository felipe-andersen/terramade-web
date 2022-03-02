import * as React from "react";
import { ProtocolControllers } from "../templates/home";

export interface IGlobalState {
  screens: ProtocolStateTransferScreens
};

export interface ProtocolStateTransferScreens {
  home:{
    dataFeeder: {};
    controllers:ProtocolControllers
    };
};

const State: IGlobalState = {
  screens: {
    home: {
      dataFeeder: {},
      controllers: {
        language: "ptBR",
        home: {
          header: { 
            form: {
              styles: {
                border: "none",
              },
              resetInputLabel: "none",
            },
            notificationBtnTitle: "Notification",
            ModalDisplay: "none",
          }
        }
      }
    }
  }
}
  
  
