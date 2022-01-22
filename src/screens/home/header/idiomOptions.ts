import React from "react";
import { language } from "../../../globalContext/language";

let translate = "language"; // let translate:HeaderProps = {};

switch ( language ) {
  case "ptBR":
    translate =  "Faça uma busca";
      break;
  case "esES":
    translate =  "Haz una búsqueda";
      break;
  case "enUS":
    translate =  "Do a search";
      break;
};

export let placeholderSelectedLanguage = translate;


