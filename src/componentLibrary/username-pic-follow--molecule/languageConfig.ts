import * as React from "react";

import { language } from "../../globalContext/language";

let translate = "ptBR_default"; 

switch ( language ) {
  case "ptBR":
    translate =  "seguidores";
      break;
  case "esES":
    translate =  "seguidores";
      break;
  case "enUSA":
    translate =  "followers";
      break;
};

export let followersSelectedLanguage = translate;