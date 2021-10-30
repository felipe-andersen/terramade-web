import React from "react";

const language = "ptBR";


export function placeholderSelectedLanguage( ) {
  if( language === "ptBR" ) {
      const translate = "Faça uma busca"
    return  translate
  } 
  else if ( language === "enUSA" ) {
    const translate = "Do a search"
    return  translate
  } 
  else if ( language === "esES" ) {
    const translate = "Haz una búsqueda"
    return translate
  }
  else if ( language === undefined ) {
    const translate = "Faça uma busca"
    return translate
  }
  console.log ( "" )
  return "faça uma busca"
};

export const placeholder_ptBR_default: string = "Faça uma busca";
export const placeholder_enUSA: string = "Do a search";
export const placeholder_es_ES: string = "Haz una búsqueda";

const placeholder: object = {
  placeholder_ptBR_default: "Faça uma busca",
  placeholder_enUSA: "Do a search",
  placeholder_es_ES: "Haz una búsqueda",
};

