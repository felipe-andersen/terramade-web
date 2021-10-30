import React, { lazy } from 'react';
import { HeaderComponent } from './header';
import { MainComponent } from "./main";
//import loadable from '@loadable/component' => SSR
//


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
const MainComponen = import("./main").then(main => {
  main.default
});
*/


export class Home extends React.Component<Props, State, PropsAny> {

  
  render(){
    return  (
      <div className="home-screem">
        <HeaderComponent></HeaderComponent>

  
        <MainComponent/>
      </div>
    )
  }
}


