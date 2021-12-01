import React from "react";
import { MainPostView } from "./main";
import { MainComponent } from "../../screens/home/main"
import { HeaderComponentFn } from "../home/header";
const FrameworkComponent = React.Component;

export class PostView extends FrameworkComponent {
  render(){
    return (
      <div>
        <HeaderComponentFn/>
        <MainPostView></MainPostView>
        <MainComponent />
      </div>
    )
  }
};