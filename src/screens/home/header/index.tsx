import * as React from "react";

import { placeholderSelectedLanguage } from "./languageConfig";
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
      <Router.Link to="/"className="svgLogo">LOGO</Router.Link>
      <form className="searchForm" id="searchForm">
        <div className="searchIcon--container">
          <SearchIcon/>
        </div>

        <input className="searchInput" id="searchInput" type="search" /*maxlength="10" readonly form_id=""*/ name="" placeholder={props.placeholderSelectedLanguage } onFocus={ resetAble } autoComplete="on"/>
        
        <label htmlFor="resetInput" className="resetInputLabel" id="resetInputLabel">
          <ClearCloseIcon/>
          <input className="resetInput" id="resetInput" value="reset "type="reset" onClick={ () => {} }></input>
        </label>
      </form>

      <div className="KeyboardVoiceIcon">
        <KeyboardVoiceIcon/>
      </div>

      <div className="btns-header">
        <button onClick={ () => {} } id="NotificationListModal" className="NotificationListModal">
          <NotificationIcon />
        </button>
        <button onClick={ () => {} } className="msgBoxModal">
          <MessageIcon />
        </button>
      </div>

      <div className="pictureImage-moreAcountModal">
        <div className="pictureImage-div">
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

    </HeaderStyledComponent>

  )
};


