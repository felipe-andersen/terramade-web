import React from 'react';
import './App.css';
import { MyRoutes } from "./routes/public";
import { GlobalStyle } from "./styles";
import * as Styled from "styled-components";
import { usePersistedState } from "./hooks/usePersitedState";
import { GlobalPropertiesAndStylesProvider, useGlobalPropertiesAndStyles }  from "./globalContext/globalTheme";


function App() {

 const { globalPropertiesAndStyles, setGlobalPropertiesAndStyles } = useGlobalPropertiesAndStyles()

 
 console.log("globalPropertiesAndStyles.homeScreen.headerPropertiesAndStyles.resetInputLabel")
  return (
    <GlobalPropertiesAndStylesProvider>

      <Styled.ThemeProvider theme={{ globalPropertiesAndStyles  }}>

        <GlobalStyle/>

        <MyRoutes/>

      </Styled.ThemeProvider>

    </GlobalPropertiesAndStylesProvider>
  );
};


export default App;
