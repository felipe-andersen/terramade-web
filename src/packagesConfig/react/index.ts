import * as React from "react";

import { CSSProp } from "styled-components"

interface MyTheme {} // declare custom theme type

declare module "react" {
  interface Attributes {
    css?: CSSProp<MyTheme>
  }
}