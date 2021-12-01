import React, { lazy } from 'react';
import { HeaderComponentFn } from './header';
import { MainComponent } from "./main";
// import loadable from '@loadable/component' => SSR
// www.terramadeproject.com/{ lang=local_ptBR }
import * as Router from "react-router-dom";

import { HomeComponentStyled } from "./styles"

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


export class HomeComponent extends React.Component<Props, State, PropsAny> {

  
  render(){
    return  (
      
      <HomeComponentStyled>

          <HeaderComponentFn/>

          <MainComponent/>

      </HomeComponentStyled>
    )
  }
}


