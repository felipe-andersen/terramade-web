import * as React from 'react';

export interface ProtocolControllers {
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
