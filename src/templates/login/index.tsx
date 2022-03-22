import * as React from "react";
import { MainComponent } from "./main";
import { StyledLoginComponent } from "./styles";


export const LoginComponent:React.FC = ():JSX.Element => {
  return (
    <StyledLoginComponent>
      <main>
        <MainComponent/>
      </main>
    </StyledLoginComponent>
  )
}