import React from "react";
// www.terramadeproject.com/{ lang=local_ptBR }/post_add
import { HeaderComponent } from '../../screens/home/header/index';
import { Main } from "./main";

interface PostAddProps {};

interface PostAddState {};




export class PostAdd extends React.Component<PostAddProps, PostAddState> {
  render():JSX.Element {
    return  (
      <div>
        <HeaderComponent />
        <Main/>
      </div>
    )
  }
}