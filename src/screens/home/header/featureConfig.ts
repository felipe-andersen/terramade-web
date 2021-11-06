import React from "react";

const lenguage = "ptBR";


export function placeholderSelectedLanguage() {
  if( lenguage === "ptBR" ) {
    "Faça uma busca"
  } else if ( lenguage === "enUSA" ) {
    "Do a search"
  } else if ( lenguage === "esES" ) {
    "Haz una búsqueda"
  }
};

export const placeholder_ptBR_default: string = "Faça uma busca";
export const placeholder_enUSA: string = "Do a search";
export const placeholder_es_ES: string = "Haz una búsqueda";

const placeholder: object = {
  placeholder_ptBR_default: "Faça uma busca",
  placeholder_enUSA: "Do a search",
  placeholder_es_ES: "Haz una búsqueda",
};


export const userPicture = "http://www.terramade.com/carlosalbuquerque/picture";
const userMsgBox = "http://www.terramade.com.br/"