import { DefaultTheme } from "styled-components";

interface CustomizationsProtocol {
  language: string,
  home: {
    header: { 
      form: {
        styles: {
          border: string,
        },
        resetInputLabel: string,
      },
      notificationBtnTitle: string,
      ModalDisplay: string,
    }
  }
}

declare module "styled-components" {

  interface CustomizationsProtocol {}

  export interface DefaultTheme extends CustomizationsProtocol {}
}
