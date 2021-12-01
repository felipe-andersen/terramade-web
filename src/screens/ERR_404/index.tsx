
import React from "react";
import {} from "../../iconLibrary/chevronIcon";
import { Error_404ComponentStyled } from "./styles";



let info:ERR_404Props = {
  info: "We cant't seem to find the page you're looking for.",
  imgError_404URL: ""
};

interface ERR_404Props {
  info: string
  imgError_404URL: string
};

export function ERR_404Template():JSX.Element {
  return (
    <Error_404ComponentStyled>
      

      <section className="infoError_404">

      <p className="oops404">Oops!</p>

      <h1 className="title404">Error code 404</h1>

      <p className="paragraph404">{ info.info }</p>

      </section>

      <img src=""></img>

    </Error_404ComponentStyled>
  )
}