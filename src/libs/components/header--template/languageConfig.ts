import React from "react";
import { language } from "../../../context/language";

let translate = "ptBR_default"; // let translate:HeaderProps = {};

switch ( language ) {
  case "ptBR":
    translate =  "Faça uma busca";
      break;
  case "esES":
    translate =  "Haz una búsqueda";
      break;
  case "enUSA":
    translate =  "Do a search";
      break;
};

export let placeholderSelectedLanguage = translate;


