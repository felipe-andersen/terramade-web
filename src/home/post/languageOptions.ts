import React from "react";

export const userName = "Ricardo Albuquerque";

export const profileImageID = "3675167657898";

let languageSelected = "";

function followersAcount(){
    return "35"
};

function followers() {
  let followers_translate: string 

  if ( languageSelected === "enUSA" ) {
    followers_translate = " followers"
  } 
  else if ( languageSelected === "enEN" ) {
    followers_translate = " seguidores";
  } 
  else if ( languageSelected === "ptBR" ) {
    followers_translate = " seguidores";
  }
};

export const followersNumber = followersAcount() + followers() 



// Variáveis para tudo ou usar interfaces, classes e objetos? Depender de pacote ou desenvolver recurso/funcionalidade?
// Programar no tempo record ou programar no tempo razoável e garantir manutenção?
// Não é uma crí