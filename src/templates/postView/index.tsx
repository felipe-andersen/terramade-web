import * as React from "react";
import { MainComponent } from "./main";
import  {HeaderComponent}  from "../home/header";
import { Div } from "./styles";


interface HomeProtocol {
  HomeNode?:HomeNodeProtocol
};

interface HomeNodeProtocol {
  HeaderComponentFn?: React.ReactChild
  MainComponent?:React.ReactChild
};

export const PostView = ({}:HomeProtocol, CongratulationMsg?: any): JSX.Element => {

  return (
    <Div>
      <header></header>
      <main>
        <MainComponent></MainComponent>
      </main>
      <section>
      </section>
    </Div>
  )
  console.log("Welcome Wemade!!!")
}