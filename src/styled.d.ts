import * as React from "react";
import 'styled-components';
import dark from "./globalContext/theme/dark";
import light from "./globalContext/theme/light";
import { IStatusGlobalPropertiesAndStyles } from "./globalContext/globalTheme";


declare module 'styled-components' {

  export interface DefaultTheme extends IStatusGlobalPropertiesAndStyles{
    
  } 


};






