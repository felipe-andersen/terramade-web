import * as React from 'react';

export interface IHomePropertiesAndStyles {
  language: string,
  home: {
    header: { 
      form: {
        styles: {
          border: string;
        }
        resetInputLabel: string,
      }
      notificationBtnTitle: string,
      ModalDisplay: string,
    }
  }
};
