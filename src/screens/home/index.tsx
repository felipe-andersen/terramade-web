import React, { lazy } from 'react';
import  HeaderComponentFn  from './header';
import { MainComponent } from "./main";
// import loadable from '@loadable/component' => SSR
// www.wemade.com/{ lang=local_ptBR }
import * as Router from "react-router-dom";
import { UserSettingsModal } from "./userSettingsModal";
import { StyledHomeComponent } from "./styles";
import {connect, useSelector} from "react-redux";
import {Provider}  from "react-redux";
import {} from "react-scroll";
import { IGlobalState } from '../../state/schemes';
import { RootState } from '../../state';

interface IHomeTemplate {

};

const HomeTemplate: React.FC = (): JSX.Element => {

  const state = useSelector((state: RootState) => state)
 
  const State: IGlobalState = {
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
  

  return  (
    <StyledHomeComponent>
        <header>
          <HeaderComponentFn/>
        </header>
        <div className="main-aside">
          <main>
            <MainComponent hideShowChildElement='flex'/>
          </main>
          <aside className="aside" >
            <div className="modalGroup" id="modalGroup" >
              <UserSettingsModal/>
            </div>
          </aside>
        </div>
    </StyledHomeComponent>
  )
  console.log("Welcome Wemade! \n ")
};

export default HomeTemplate;