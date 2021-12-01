import * as React from "react";
import dark from "../theme/dark";
import light from "../theme/light";
import styled, { DefaultTheme,  } from "styled-components";




export interface IStatusGlobalPropertiesAndStyles {
  globalPropertiesAndStyles: IglobalPropertiesAndStyles;
  setGlobalPropertiesAndStyles?: React.Dispatch<React.SetStateAction<IglobalPropertiesAndStyles>>
}

export interface IglobalPropertiesAndStyles {
  language: string;
  homeScreen: {
    headerPropertiesAndStyles: {
    resetInputLabel: string,
    notificationBtnTitle: string
    }
  }
}

interface PropertiesAndStylesProviderProps {
  children: React.ReactNode
};

export const myThemes:IglobalPropertiesAndStyles = {
  language: "pt-br",
  homeScreen: {
    headerPropertiesAndStyles: {
      resetInputLabel: "none",
      notificationBtnTitle: "Notificação"
    }
  }
};

const GlobalPropertiesAndStylesContext = React.createContext<IStatusGlobalPropertiesAndStyles>({} as IStatusGlobalPropertiesAndStyles );

export function GlobalPropertiesAndStylesProvider({children}:PropertiesAndStylesProviderProps) {

  const [globalPropertiesAndStyles, setGlobalPropertiesAndStyles] = React.useState(myThemes);
  
  return (
  <GlobalPropertiesAndStylesContext.Provider value={{globalPropertiesAndStyles, setGlobalPropertiesAndStyles}}>
    {children}
  </GlobalPropertiesAndStylesContext.Provider>
  )
};


export const useGlobalPropertiesAndStyles = () => {
  const context = React.useContext(GlobalPropertiesAndStylesContext);
  if (!context) console.log("await ...");
  const { globalPropertiesAndStyles, setGlobalPropertiesAndStyles } = context;
  return { globalPropertiesAndStyles, setGlobalPropertiesAndStyles }
}
