import React, { lazy } from 'react';
import { HeaderComponentFn } from './header';
import { MainComponent } from "./main";
// import loadable from '@loadable/component' => SSR
// www.terramadeproject.com/{ lang=local_ptBR }
import * as Router from "react-router-dom";
import { UserSettingsModal } from "./userSettingsModal";
import { StyledHomeComponent } from "./styles"
import { AllPropriertiesProvider } from '../../globalContext/globalTheme/g';

export const HomeTemplate: React.FC = (): JSX.Element => {
  return  (
    <StyledHomeComponent>

        <header>
            <HeaderComponentFn/>
        </header>
        <div className="main-aside">
          <main>
            <MainComponent/>
          </main>
          <AllPropriertiesProvider>
          <aside className="aside" >
            <div className="modalGroup" id="modalGroup" >
              <UserSettingsModal/>
            </div>
          </aside>
          </AllPropriertiesProvider>
        </div>

    </StyledHomeComponent>
  )
}



