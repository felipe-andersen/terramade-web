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
//import { useGlobalPropertiesAndStyles } from "../../../globalContext/globalTheme";
import { useAllPropriertiesHeader } from "./g";
import { useGlobalPropertiesAndStyles } from "../../../App";

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
  
  const { state, setState } = useGlobalPropertiesAndStyles();

  return (
    <HeaderStyledComponent id="HeaderStyledComponent">
      <section className="header--container">
      <Router.Link to="/"className="svgLogo">LOGO</Router.Link>
      <form autoComplete="off" className="form" id="form" title={"Search using voice command, characters or image."}>
        <section  className="inputGroup" id="inputGroup">
        <i className="searchIcon--container">
            <SearchIcon/>
        </i>
        <label htmlFor="searchInput" className="searchInputLabel" id="searchInputLabel">
          <input className="searchInput" id="searchInput" type="search" /*maxlength="10" readonly form_id=""*/ name="" placeholder={props.placeholderSelectedLanguage } onFocus={ resetAble } autoComplete="off"/>
          <label htmlFor="resetInput" className="resetInputLabel" id="resetInputLabel">
            <ClearCloseIcon/>
            <input className="resetInput" id="resetInput" value="reset "type="reset" onClick={ () => {} }></input>
          </label>
        </label>
        <section className="ImageSearchIcon-KeyboardVoiceIcon--container">
          <label htmlFor="keyboardVoice" className="keyboardVoiceLabel" id="keyboardVoiceLabel" title={"Voice command"}>
            <i className="KeyboardVoiceIcon--container">
              <KeyboardVoiceIcon/>
            </i>
           {/*<input className="keyboardVoice" id="keyboardVoice" onClick={ () => {} }/>*/}
           <div className="info">{"Voice command"}</div> 
          </label>
          <label htmlFor="imputUpload" className="imputUploadLabel" id="imputUploadLabel" title={"Upload an image"}>
            <i className="ImageSearchIcon--container">
              <ImageSearchIcon/>
            </i>
            <input className="imputUpload" id="imputUpload" type="file" name="Image"  accept="image/png, image/jpeg, image/jpg" multiple/>
            <div className="info">{"Upload an image"}</div> 
          </label>
        </section>
        </section>
      </form>
      <div className="btns-header">
        <button onClick={ () => ShowHideModal()/*() =>
        setState(
          {
            language: "ptBR",
            homeScreen: {
              headerPropertiesAndStyles: {
                resetInputLabel: "none",
                notificationBtnTitle: "Notificação",
                ModalDisplay: state.homeScreen.headerPropertiesAndStyles.ModalDisplay == "none"? "flex" : "none",
              }
            }
          }
        )*/} id="NotificationListModalBtn" className="NotificationListModalBtn" title={"Notification - bell"}>
          <NotificationIcon />
          <div className="info">{"Notification"}</div>
        </button>
        <button onClick={ () => {} } className="msgBoxModalBtn" title="Message box">
         <MessageIcon />
         <div className="info">{"Message box"}</div>
        </button>
      </div>
      <button className="userSettingsModalBtns" title={"About the account"}>
        <div className="pictureImage--container">
          <img alt="" src={ props.userPicture } className="pictureImage"/>
          <div className="info">{"About the account"}</div> 
        </div>
      </button>
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
    
    </HeaderStyledComponent>

  )


  
  function ShowHideModal():void {
    setState( 
      {
        language: "ptBR",
        homeScreen: {
          headerPropertiesAndStyles: {
            resetInputLabel: "none",
            notificationBtnTitle: "Notificação",
            ModalDisplay: state.homeScreen.headerPropertiesAndStyles.ModalDisplay == "none"? "flex" : "none",
          }
        }
      }
    )
  }
};


const keywordBackgroundColor = {
  colorName:"#9c8f00",

}





//const hashtags = JSON.parse();
