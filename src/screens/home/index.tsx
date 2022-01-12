import React, { lazy } from 'react';
import { HeaderComponentFn } from './header';
import { MainComponent } from "./main";
// import loadable from '@loadable/component' => SSR
// www.terramadeproject.com/{ lang=local_ptBR }
import * as Router from "react-router-dom";
import { UserSettingsModal } from "./userSettingsModal";

import { StyledHomeComponent } from "./styles"

interface Props {

}

interface State {
  dfdfdfd: React.ComponentClass<Props1, State1>
}

interface PropsAny {

}

interface Props1 {

}

interface State1 {

}
/*
const MainComponent = import("./main").then(main => {
  main.MainComponent
});
*/


export const HomeTemplate: React.FC = (): JSX.Element => {
  return  (
    <StyledHomeComponent>
        <header>
          <HeaderComponentFn/>
        </header>
        <main>
          <MainComponent/>
          {/*<label htmlFor="msgBoxModal" className='msgBoxModalLabel'>BTN</label>*/}
          <div className="modalGroup">
            <UserSettingsModal/>
          </div>
        </main>
    </StyledHomeComponent>
  )
}



