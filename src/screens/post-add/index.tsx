import React from "react";

import { HeaderComponent }from '../../home/header/index';
import { Main } from "./main"

interface PostAddProps {};

interface PostAddState {};

interface AnyProps {};


export class PostAdd extends React.Component<PostAddProps, PostAddState, AnyProps> {
  render():JSX.Element {
    return  (
      <div>
        <HeaderComponent />
        <Main/>
      </div>
    )
  }
}