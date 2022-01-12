import React from 'react';
import './App.css';
import { PublicRoutes } from "./routes/public";
import { AuthenticationRoutes } from "./routes/authentication";
import { GlobalStyle } from "./globalStyles";
import * as Styled from "styled-components";
import { usePersistedState } from "./hooks/usePersitedState";
import { GlobalPropertiesAndStylesProvider, useGlobalPropertiesAndStyles }  from "./globalContext/globalTheme";
import { AllRoutes } from './routes';


function App() {

 const { globalPropertiesAndStyles, setGlobalPropertiesAndStyles } = useGlobalPropertiesAndStyles()

  return (
    <GlobalPropertiesAndStylesProvider>

      <Styled.ThemeProvider theme={{ globalPropertiesAndStyles  }}>

        <GlobalStyle/>

        <AllRoutes/>

      </Styled.ThemeProvider>

    </GlobalPropertiesAndStylesProvider>
  );
};

export default App;
