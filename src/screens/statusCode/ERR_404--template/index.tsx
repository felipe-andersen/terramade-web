
import React from "react";
import {} from "../../../iconLibrary/chevronIcon";
import { StyledStatusCode404Component } from "./styles";



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
    <StyledStatusCode404Component>
      <div className="mainComponent">
        <section className="statuscode">
          <span className="oops-title">
          <p className="oops">Oops!</p>
          <h1 className="title">Error code 404</h1>
          </span>
          <p className="paragraph">{ info.info }</p>
          <p className="oops">Details</p>
        </section>
        <section className="more">
          <img src=""/>
        </section>
        <div  className="reloadBtn--container">
          <a className="reloadBtn" href="">{"Reload"}</a>
        </div>
      </div>
    </StyledStatusCode404Component>
  )
}