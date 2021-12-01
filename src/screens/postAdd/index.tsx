import React from "react";
// br.terramadeproject.com/create-post
import { HeaderComponentFn } from '../../screens/home/header/index';
import { Main } from "./main";

interface PostAddProps {};

interface PostAddState {};




export class PostAdd extends React.Component<PostAddProps, PostAddState> {
  render():JSX.Element {
    return  (
      <>
        <Main/>
      </>
    )
  }
}