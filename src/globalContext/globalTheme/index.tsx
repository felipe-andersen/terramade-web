import * as React from "react";
import dark from "../mode/dark";
import light from "../mode/light";
import { DefaultTheme  } from "styled-components";




export interface IStatusGlobalPropertiesAndStyles {
  globalThemes: MyThemes;
  setGlobalThemes: React.Dispatch<React.SetStateAction<MyThemes>>;
}

export interface MyThemes {
  language: string,
  homeScreen: {
    headerPropertiesAndStyles: { 
      resetInputLabel: string,
      notificationBtnTitle: string,
      ModalDisplay: string,
    }
  }
};

interface PropertiesAndStylesProviderProps {
  children: React.ReactNode
};

export const myThemes:MyThemes = {
  language: "ptBR",
  homeScreen: {
    headerPropertiesAndStyles: {
      resetInputLabel: "none",
      notificationBtnTitle: "Notificação",
      ModalDisplay: "none",
    }
  }
};

const GlobalPropertiesAndStylesContext = React.createContext<IStatusGlobalPropertiesAndStyles>({} as IStatusGlobalPropertiesAndStyles );

export function GlobalPropertiesAndStylesProvider({children}:PropertiesAndStylesProviderProps) {

  const [globalThemes, setGlobalThemes] = React.useState<MyThemes>(myThemes);
  
  return (
  <GlobalPropertiesAndStylesContext.Provider value={{globalThemes, setGlobalThemes}}>
    {children}
  </GlobalPropertiesAndStylesContext.Provider>
  )
};


export const useGlobalPropertiesAndStyles = () => {
  const context = React.useContext(GlobalPropertiesAndStylesContext);
  if (!context) console.log("await ..."); //appLoading
  const {globalThemes, setGlobalThemes} = context;
  return {globalThemes, setGlobalThemes}
}
