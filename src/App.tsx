import React from 'react';

import { PublicRoutes } from "./TemplateRoutes/public";
import { AuthenticationRoutes } from "./TemplateRoutes/authentication";
import { GlobalStyle } from "./globalStyles";
import * as Styled from "styled-components";
import { usePersistedState } from "./hooks/usePersitedState";

import { AllRoutes } from './TemplateRoutes';
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


