import React from 'react';
import { IGlobalState, ProtocolStateTransferScreens } from "./state/schemes";
import { PublicRoutes } from "./TemplateRoutes/public";
import { AuthenticationRoutes } from "./TemplateRoutes/authentication";
import { GlobalStyle } from "./globalStyles";
import * as Styled from "styled-components";
import { usePersistedState } from "./hooks/usePersitedState";
import { AllRoutes } from './TemplateRoutes';
import { Provider } from 'react-redux';
import { RootState, store } from './state';
import { useSelector } from 'react-redux';




function App() {

  const theme = StyledComponentsThemeProvider().themeProvider

  return (
    <Provider store={store}>
 
  
      <Styled.ThemeProvider theme={ theme }>

        <GlobalStyle/>

        <AllRoutes/>

        </Styled.ThemeProvider>

   
    </Provider>
  )
};

export default App;

function StyledComponentsThemeProvider (){
  const state = useSelector((state: RootState) => state);
 
  const themeProvider: IGlobalState = {
  screens: {
    home: {
      dataFeeder: {},
      controllers: {
        language: state.homeReducer.language,
        home: {
          header: { 
            form: {
              styles: {
                border: state.homeReducer.home.header.form.styles.border,
              },
              resetInputLabel: state.homeReducer.home.header.form.resetInputLabel,
            },
            notificationBtnTitle: state.homeReducer.home.header.notificationBtnTitle,
            ModalDisplay: state.homeReducer.home.header.ModalDisplay,
          }
        }
      }
    }
  }
 };

 const HTMLObject = (<></>);

  return { themeProvider, HTMLObject };
}
