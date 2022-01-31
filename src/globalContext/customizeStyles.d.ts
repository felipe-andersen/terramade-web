import React from "react";
import {} from "styled-components";
import { IScreensGlobalState } from "../state/interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends IScreensGlobalState {
  }
};









