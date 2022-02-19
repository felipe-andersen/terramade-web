import * as React from "react";

import { placeholderSelectedLanguage } from "./idiomOptions";
import * as Router from "react-router-dom";
import * as Styled from "styled-components"
import { HeaderStyledComponent } from "./styles";
import { SearchIcon } from "../../../libs/icons/searchIcon";
import { ChevronIcon } from "../../../libs/icons/chevronIcon";
import { NotificationIcon } from "../../../libs/icons/notificationIcon";
import { MessageIcon } from "../../../libs/icons/messageIcon";
import styled from "styled-components";
import { KeyboardVoiceIcon } from "../../../libs/icons/keyboardVoiceIcon";
import { NotificationListModal } from "../notificationListModal";
import { ClearCloseIcon } from "../../../libs/icons/clear-close/index";
import { defaultTheme } from "react-select";
import { UserSettingsModal } from '../userSettingsModal';
import { ImageSearchIcon } from "../../../libs/icons/imageSearch";
//import { useGlobalPropertiesAndStyles } from "../../../globalContext/globalTheme";
import {  } from "./features";
import {useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state";
import { ActionsHomePropertiesAndStyles } from "../../../state/templates/home/controllers/actions";
import { State } from "react-native-gesture-handler";
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

function HeaderComponentFn({placeholderSelectedLanguage,userPicture}:HeaderComponentProps):JSX.Element {

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

  const homeState = useSelector((state: RootState) => state);
  const homeSetState = useDispatch();

  const form = window.document.getElementById("form");
  const searchInput = window.document.getElementById("searchInput");

  searchInput?.addEventListener('focus', function(){
    homeSetState(ActionsHomePropertiesAndStyles(
      {
        language: 'enUS',
        home: {
          header: { 
            form: {
              styles: {
                border: homeState.homeReducer.home.header.form.styles.border == "none" ? "2px solid blue" : "2px solid blue",
              },
              resetInputLabel: "none",
            },
            notificationBtnTitle: "Notification",
            ModalDisplay: homeState.homeReducer.home.header.ModalDisplay == "none"? "flex" : "none",
          }
        }
      }
    ));
  });

  searchInput?.addEventListener('focusout', function(){
    let border = form?.style.border
    border = "none";
  });
  
  return (
    <HeaderStyledComponent id="HeaderStyledComponent">
      <section className="header--container">
      <Router.Link to="/"className="svgLogo">LOGO</Router.Link>
      {}
      <form style={{border: `${homeState.homeReducer.home.header.form.styles.border}`}} autoComplete="off" className="form" id="form" title={"Search using voice command, characters or image."}>
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
        <button onClick={ () => homeSetState(ActionsHomePropertiesAndStyles(
      {
        language: 'enUS',
        home: {
          header: { 
            form: {
              styles: {
                border: "none",
              },
              resetInputLabel: "none",
            },
            notificationBtnTitle: "Notification",
            ModalDisplay: homeState.homeReducer.home.header.ModalDisplay == "none"? "flex" : "none",
          }
        }
      }
    ))} id="NotificationListModalBtn" className="NotificationListModalBtn" title={"Notification - bell"}>
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
  );
};

export default HeaderComponentFn;

