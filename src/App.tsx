import React from 'react';
import './App.css';
import { PublicRoutes } from "./routes/public";
import { AuthenticationRoutes } from "./routes/authentication";
import { GlobalStyle } from "./globalStyles";
import * as Styled from "styled-components";
import { usePersistedState } from "./hooks/usePersitedState";
import { myThemes, GlobalPropertiesAndStylesProvider, MyThemes }  from "./globalContext/globalTheme";
import { AllRoutes } from './routes';

export interface IStatusGlobalPropertiesAndStyles {
  state: MyThemes;
  setState: React.Dispatch<React.SetStateAction<MyThemes>>;
}

const GlobalContextPropertiesAndStyles = React.createContext<IStatusGlobalPropertiesAndStyles>({} as IStatusGlobalPropertiesAndStyles );

function App() {

 const [state, setState] = React.useState(myThemes)

  return (
    <GlobalContextPropertiesAndStyles.Provider value={{state, setState}}>
  
      <Styled.ThemeProvider theme={ state}>

        <GlobalStyle/>

        <AllRoutes/>

      </Styled.ThemeProvider>

    </GlobalContextPropertiesAndStyles.Provider>
  );
};

export default App;


export const useGlobalPropertiesAndStyles = () => {
  const context = React.useContext(GlobalContextPropertiesAndStyles);
  if (!context) console.log("await ..."); //appLoading
  const {state, setState} = context;
  return {state, setState}
}
