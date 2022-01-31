import React from 'react';
import './App.css';
import { PublicRoutes } from "./routes/public";
import { AuthenticationRoutes } from "./routes/authentication";
import { GlobalStyle } from "./globalStyles";
import * as Styled from "styled-components";
import { usePersistedState } from "./hooks/usePersitedState";

import { AllRoutes } from './routes';
import { Provider } from 'react-redux';

import { store } from './state';

function App() {
  return (
    <Provider store={store}>
 
  
     {/* <Styled.ThemeProvider theme={ store.subscribe(homeReducer)}>*/}

        <GlobalStyle/>

        <AllRoutes/>

      {/* </Styled.ThemeProvider>*/}

   
    </Provider>
  )
};

export default App;


