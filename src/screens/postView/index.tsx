import React from "react";
import { MainPostView } from "./main";
import { MainComponent } from "../../screens/home/main"
import { HeaderComponentFn } from "../home/header";
import { StyledPostViewComponent } from "./styles";


export const PostView:React.FC = (): JSX.Element => {
  return (
    <StyledPostViewComponent>
      <header></header>
      <HeaderComponentFn/>
      <main>
        <MainPostView></MainPostView>
      </main>
      <section>
        <MainComponent />
      </section>
    </StyledPostViewComponent>
  )
};