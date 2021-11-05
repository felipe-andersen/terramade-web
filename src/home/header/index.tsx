import * as React from "react";
import { userPicture } from "./featureConfig";
import { placeholderSelectedLanguage } from "./languageOptions";
import "./styles.css";
import { SearchIcon } from "../../svgComponent/search-icon";
import { ChevronIcon } from "../../svgComponent/chevron-icon";
import { NotificationIcon } from "../../svgComponent/notification-icon";
import { MessageIcon } from "../../svgComponent/message-icon";

let props: HeaderComponentProps = {
  placeholderSelectedLanguage: placeholderSelectedLanguage,
  userPicture: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
};

interface HeaderComponentProps {
  placeholderSelectedLanguage?: string;
  userPicture?: string;
};

interface State {
};

export class HeaderComponent extends React.Component<HeaderComponentProps, State> {
 
  render() {
    return (
    <div className="headerComponent">
      <a className="svgLogo" href="">LOGO</a>
      <div className="searchcInput"><div className="svg-source"><SearchIcon/></div><input id="searchInput" type="search" /*maxlength="10" readonly form_id=""*/ name="" placeholder={ props.placeholderSelectedLanguage }/></div>
      <div className="btns-header">
        <button onClick={ () => {} } className="NotificationListModal"><NotificationIcon/></button>
        <button onClick={ () => {} } className="msgBoxModal"><MessageIcon/></button>
      </div>
      <div className="pictureImage-moreAcountModal">
        <div className="pictureImage-div"><img alt="" src={ props.userPicture } className="pictureImage"/></div>
        <button onClick={ () => {} } className="moreAcountModal"><ChevronIcon/></button>
      </div>
    </div>
    )
  }
};