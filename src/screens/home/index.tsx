import React, { lazy } from 'react';
import { HeaderComponent } from './header';
import { MainComponent } from "./main";
// import loadable from '@loadable/component' => SSR
// www.terramadeproject.com/{ lang=local_ptBR }


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


