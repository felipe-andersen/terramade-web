import React from "react";
import { language } from "../../../context/language";

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

export function sum(a:any, b:any) {
  return a + b;
};


 //const [ headerState, setHeaderState ] = React.useState(HeaderProps.props);






/*
 const hendle = () => {
  window.addEventListener('scroll', () => {
    if(window.document.scrollingElement?.scrollTo ){
      HeaderHightChange();
    } else {
    console.log("ok");
    }
  })
};



const HeaderHightChange = () => {
  const Header = document.getElementById("HeaderStyledComponent");
  let heightHeight = Header?.style.height;
  heightHeight = "50px";
};

const Header = document.getElementById("HeaderStyledComponent");

const Yoffset = () => {
  if(window.document.scrollingElement?.scrollTo) {
    HeaderHightChange();
  }
};

const onClick = () =>{
  var svgState = document.getElementById("NotificationListModal");
};

const reset = () => {
  let f = document.getElementById("searchInput")?.nodeValue
  f = "";
};

const resetAble = (e:any) => {

  
  const searchInput = document.getElementById("searchInput");
  let resetInput = document.getElementById("resetInputLabel");
  let able = resetInput?.style.backgroundColor;
  able = "flex"
  searchInput?.addEventListener("focus", () => { able = "none"})
  

  if(e.focus) {
    //React.useContext(Styled.ThemeContext)
  }
};

const form = window.document.getElementById("form");

const searchInput = window.document.getElementById("searchInput");


*/


