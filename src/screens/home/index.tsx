import React, { lazy } from 'react';
import  HeaderComponentFn  from './header';
import { MainComponent } from "./main";
// import loadable from '@loadable/component' => SSR
// www.wemade.com/{ lang=local_ptBR }
import * as Router from "react-router-dom";
import { UserSettingsModal } from "./userSettingsModal";
import { StyledHomeComponent } from "./styles";
import {connect} from "react-redux";
import {Provider}  from "react-redux";
import {} from "react-scroll";

interface IHomeTemplate {

};

const HomeTemplate: React.FC = (): JSX.Element => {
  interface Props extends IHomeTemplate {
 
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