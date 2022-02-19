
import React from "react";
import {} from "../../libs/icons/chevronIcon";
import { ERR_404Template } from "./ERR_404--template";
import { StatusCodeStyledComponent } from "./styles";

export const StatusCodeTamplate:React.FC = ():JSX.Element => {
  return (
    <StatusCodeStyledComponent>
      <main>
        <ERR_404Template/>
      </main>
    </StatusCodeStyledComponent>
  )
}