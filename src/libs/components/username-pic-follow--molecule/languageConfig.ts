import * as React from "react";

import { language } from "../../../globalContext/language";

let translate = "language"; 

switch ( language ) {
  case "ptBR":
    translate =  "seguidores";
      break;
  case "esES":
    translate =  "seguidores";
      break;
  case "enUS":
    translate =  "followers";
      break;
};

export let followersSelectedLanguage = translate;