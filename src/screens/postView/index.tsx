import React from "react";
import { MainPostView } from "./main";
import { MainComponent } from "../../screens/home/main"
import { HeaderComponent } from "../home/header";
const FrameworkComponent = React.Component;

export class PostView extends FrameworkComponent {
  render(){
    return (
      <div>
        <HeaderComponent/>
        <MainPostView></MainPostView>
        <MainComponent />
      </div>
    )
  }
};