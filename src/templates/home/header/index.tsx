import * as React from "react";
import { placeholderSelectedLanguage } from "./script";
import * as Router from "react-router-dom";
import { HeaderStyledComponent } from "./styles";
import { SearchIcon } from "../../../libs/icons/searchIcon";
import { ChevronIcon } from "../../../libs/icons/chevronIcon";
import { NotificationIcon } from "../../../libs/icons/notificationIcon";
import { MessageIcon } from "../../../libs/icons/messageIcon";
import { KeyboardVoiceIcon } from "../../../libs/icons/keyboardVoiceIcon";
import { NotificationListModal } from "../main/child/notificationListModal";
import { ClearCloseIcon } from "../../../libs/icons/clear-close/index";
import { UserSettingsModal } from '../section/userSettingsModal';
import { ImageSearchIcon } from "../../../libs/icons/imageSearch";



export interface HeaderProtocol {
  HeaderNode?: HeaderNodeProtocol
  data: HeaderPropsProtocol
};

interface HeaderNodeProtocol {
  
}; 

interface HeaderPropsProtocol {
  placeholderSelectedLanguage?: string;
  userPicture?: string
}; 

export const HeaderComponent = (props:HeaderProtocol): JSX.Element => {
  
  //const [ headerState, setHeaderState ] = React.useState<>(HeaderProps.props);

  return (
    <HeaderStyledComponent data-testid="HeaderStyledComponent">
      <section className="header--container">
      <Router.Link to="/"className="svgLogo">LOGO</Router.Link>
      <form autoComplete="off" className="form" id="form" title={"Search using voice command, characters or image."} data-testid="formTitle">
        <section  className="inputGroup" id="inputGroup">
        <i className="searchIcon--container">
            <SearchIcon/>
        </i>
        <label htmlFor="searchInput" className="searchInputLabel" id="searchInputLabel">
          <input className="searchInput" id="searchInput" type="search" /*maxlength="10" readonly form_id=""*/ name="" placeholder={""} onFocus={ () => {} } autoComplete="off"/>
          <label htmlFor="resetInput" className="resetInputLabel" id="resetInputLabel" data-testid="">
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
        <button id="NotificationListModalBtn" className="NotificationListModalBtn" title={"Notification - bell"}>
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
          <img alt="" src={ "props.data.userPicture" } className="pictureImage"/>
          <div className="info">{"About the account"}</div> 
        </div>
      </button>
      <div className="modal-group">
        {/*<UserSettingsModal/>*/}
      </div>
      </section>
    </HeaderStyledComponent>
  );
};

