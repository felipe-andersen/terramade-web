import React from "react";
import {} from "styled-components";
import { IGlobalState } from "../state/schemes";

declare module "styled-components" {
  export interface DefaultTheme extends IGlobalState {}
};









