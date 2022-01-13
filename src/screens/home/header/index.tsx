import * as React from "react";

import { placeholderSelectedLanguage } from "./idiomOptions";
import * as Router from "react-router-dom";
import * as Styled from "styled-components"
import { HeaderStyledComponent } from "./styles";
import { SearchIcon } from "../../../iconLibrary/searchIcon";
import { ChevronIcon } from "../../../iconLibrary/chevronIcon";
import { NotificationIcon } from "../../../iconLibrary/notificationIcon";
import { MessageIcon } from "../../../iconLibrary/messageIcon";
import styled from "styled-components";
import { KeyboardVoiceIcon } from "../../../iconLibrary/keyboardVoiceIcon";
import { ExecSyncOptions } from "child_process";
import { NotificationListModal } from "../notificationListModal";
import { ClearCloseIcon } from "../../../iconLibrary/clear-close/index";
import { defaultTheme } from "react-select";
import { UserSettingsModal } from '../userSettingsModal';
import { ImageSearchIcon } from "../../../iconLibrary/imageSearch";

//-----------------------------------------------------------------------------------------------------


export const userPicture = "http://www.terramade.com/carlosalbuquerque/picture";






let props: HeaderComponentProps = {
  placeholderSelectedLanguage: placeholderSelectedLanguage,
  userPicture: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
};

interface HeaderComponentProps {
  placeholderSelectedLanguage?: string;
  userPicture?: string;
};


export function HeaderComponentFn({placeholderSelectedLanguage,userPicture}:HeaderComponentProps):JSX.Element {

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

    /*
    const searchInput = document.getElementById("searchInput");
    let resetInput = document.getElementById("resetInputLabel");
    let able = resetInput?.style.backgroundColor;
    able = "flex"
    searchInput?.addEventListener("focus", () => { able = "none"})
    */

    if(e.focus) {
      //React.useContext(Styled.ThemeContext)
    }
  };


  return (
    
    <HeaderStyledComponent id="HeaderStyledComponent">
      <section className="header--container">

      <Router.Link to="/"className="svgLogo">LOGO</Router.Link>
      <form title={"Faça uma busca usando comando de voz, caracteres e imagem."} className="searchForm" id="searchForm">
        <i className="searchIcon--container">
            <SearchIcon/>
        </i>
        <label htmlFor="searchInput" className="searchInputLabel" id="searchInputLabel">

          <input className="searchInput" id="searchInput" type="search" /*maxlength="10" readonly form_id=""*/ name="" placeholder={props.placeholderSelectedLanguage } onFocus={ resetAble } autoComplete="on"/>
          <label htmlFor="resetInput" className="resetInputLabel" id="resetInputLabel">
            <ClearCloseIcon/>
            <input className="resetInput" id="resetInput" value="reset "type="reset" onClick={ () => {} }></input>
          </label>
        </label>
       

        <section className="ImageSearchIcon-KeyboardVoiceIcon--container">
          <label htmlFor="keyboardVoice" className="keyboardVoiceLabel" id="keyboardVoiceLabel">
            <i className="KeyboardVoiceIcon--container">
              <KeyboardVoiceIcon/>
            </i>
           {/*<input className="keyboardVoice" id="keyboardVoice" onClick={ () => {} }/>*/}
          </label>
          <label htmlFor="imputUpload" className="imputUploadLabel" id="imputUploadLabel">
            <i className="ImageSearchIcon--container">
              <ImageSearchIcon/>
            </i>
            <input className="imputUpload" id="imputUpload" type="file" name="Image"  accept="image/png, image/jpeg, image/jpg" multiple />
          </label>
        </section>
      </form>

      <div className="btns-header">
        <button onClick={ () => {} } id="NotificationListModal" className="NotificationListModal" title={"Notificação - sininho"}>
          <NotificationIcon />
          <div className="info">{"Notificação"}</div>
        </button>
        <button onClick={ () => {} } className="msgBoxModal">
         <MessageIcon />
        </button>
      </div>
      <div className="userSettingsModalBtns">
        <div className="pictureImage--container">
          <img alt="" src={ props.userPicture } className="pictureImage"/>
        </div>
        <button onClick={ () => {} } className="moreAcountModal">
          <ChevronIcon/>
        </button>
      </div>
      {    
        window.document.addEventListener("scroll", (e) => {
          let scroll = Header?.style.height;
          console.log(scroll);

          if(window.pageYOffset == 0){
            let h = Header?.style.height;
            h = "45px"
            console.log("h")
          }
        })
      }
      <div className="modal-group">
        <UserSettingsModal/>
      </div>

      </section>
      <section className="keywords--container">
        <span className="previewBtn"></span>
        <div className="keywordsList"> 
        <button className="keywords" style={{backgroundColor:"#9c8f00"}}>{"lavanderia"}</button>
        <button className="keywords" title="decor" style={{backgroundColor:"rgba(255, 140, 100, 1)"}}>#decor</button>
        <button className="keywords" style={{backgroundColor:"rgba(255, 102, 89, 1)"}}>{"louça"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"pintura"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#cimento queimado"}</button>
        <button className="keywords" style={{backgroundColor:"#9c8f00"}}>{"lavanderia"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(255, 140, 100, 1)"}}>{"#porcelanato"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(255, 102, 89, 1)"}}>{"DIY"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"shingle"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#standby"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"bar"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#arquiday"}</button>
        <button className="keywords" style={{backgroundColor:"#9c8f00"}}>{"lavanderia"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"shingle"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#standby"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"bar"}</button>
        <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#arquiday"}</button>
        <button className="keywords" style={{backgroundColor:"#9c8f00"}}>{"lavanderia"}</button>
        </div>
        <span className="nextBtn"><ImageSearchIcon/></span>
      </section>
    </HeaderStyledComponent>

  )
};


const keywordBackgroundColor = {
  colorName:"#9c8f00",

}




//const hashtags = JSON.parse();

