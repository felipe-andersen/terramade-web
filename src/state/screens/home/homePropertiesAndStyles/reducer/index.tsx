import * as React from 'react';
import { IHomePropertiesAndStyles } from '../..';
import { ActionsCatalog } from '../actions';
import { IActionsHomePropertiesAndStyles } from '../actions';

const INITIAL_STATE:IHomePropertiesAndStyles = {
    language: "enUS",
    home: {
      header: { 
        form: {
          styles: {
            border: "none",
          },
          resetInputLabel: "none",
        },
        notificationBtnTitle: "Notification",
        ModalDisplay: 'none',
      }
    }
}

export const homePropertiesAndStylesReducer = (state = INITIAL_STATE, action:IActionsHomePropertiesAndStyles ) => {
  switch (action.type) {
    case ActionsCatalog.SET_HOME_TEMPLATE : 
      return { 
        ...action.payload        
      }
    default :
    return {
      ...state
    }
  }
}