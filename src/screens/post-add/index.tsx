import React from "react";

import { HeaderComponent } from '../../home/header/index';
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