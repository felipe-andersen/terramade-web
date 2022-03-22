import React from 'react';
import { GlobalStyle } from "./globalStyles";
import * as StyledComponents from "styled-components";
import { AllRoutes } from './TemplateRoutes';
import { theme } from './packagesConfig/styled-components/customTheme';


function App() {
  
  return (

    <StyledComponents.ThemeProvider theme={theme}>

      <GlobalStyle/>
         
      <AllRoutes/>

    </StyledComponents.ThemeProvider>
  
  )
};

export default App;

