import * as React from "react";
import "./index.css";
import { placeholderSelectedLanguage } from "./languageConfig";
import * as Router from "react-router-dom";
//import "./styles.css";
import { SearchIcon } from "../../icons/searchIcon";
import { ChevronIcon } from "../../icons/chevronIcon";
import { NotificationIcon } from "../../icons/notificationIcon";
import { MessageIcon } from "../../icons/messageIcon";

import styled from "styled-components";


export const userPicture = "http://www.terramade.com/carlosalbuquerque/picture";

export const HeaderStyledComponent = styled.div`

    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #eeeeee;
    margin: -81px 0 0 0;
    background-color: white;
    position: fixed;
    z-index: 99;


    /*.headerComponent {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    margin: -81px 0 0 0;
    background-color: white;
    position: fixed;
    z-index: 99;*/
}   

.svgLogo {
    margin: 0 20px;
}

.pictureImage-moreAcountModal {
    display: flex;
    align-items: center;
}

.pictureImage-div {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    border: 10px solid rgba(245, 245, 245, 0);
    background-color: transparent;
}

.pictureImage-div:hover {
    background-color: rgb(213, 233, 255);
}

.pictureImage {
    width: 38px;
    height: 38px;
    overflow: hidden;
    border-radius: 50%;
    border: none;
}

.moreAcountModal {
    width: 25px;
    height: 25px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 0 0 0;
    border: none;;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
}

.moreAcountModal:hover {
    background-color: rgb(222, 228, 236);
}

.searchForm {
    width: 33.7%;
    height: 40px;
    display:flex;
    background-color: rgb(240, 229, 229);
    align-items: center;
    border-radius: 5px;
}

.searchInput {
    width: 100%;
    height: 100%;
    font-size: 16px;
    outline: none;
    border: none;
    color: black;
    background-color: transparent;
    padding: 0 20px 0 50px;
}

.searchIcon--container {
    width: 50px;
    height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 -50px 0 0px;
    z-index:10;
}

.searchInput::placeholder {
    font-size: 16px;
    color: #757575;
    
}

.searchInput:focus{
   ::placeholder {
    color: #b4b4b4;
   }
}

.searchcInput::-webkit-input-placeholder {
    font-size: 16px;
    color: red;
}
 
 :-moz-placeholder { /* Firefox 18- */
    font-size: 16px;
    color: red;  
}
 
 ::-moz-placeholder {  /* Firefox 19+ */
    color: red;  
}
 
 :-ms-input-placeholder {  
    color: red;  
}

textarea::placeholder {
    color: blue;
}

.resetInput {
    width: 40px;
    margin: 0 0 0 -40px;
}

.btns-header {
    display: flex;
}

.NotificationListModal {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 8px 0 0;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(240, 229, 229);
}

.NotificationListModal:hover {
    background-color: rgb(213, 233, 255);
    border: 3px solid rgb(53, 117, 253);
}

.NotificationListModal:focus {
    background-color: rgb(97, 71, 71);
    border: 3px solid rgb(97, 71, 71);
    
}

.NotificationListModal:focus {
  
    border: 1px solid white;
    
}

.msgBoxModal {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(240, 229, 229);
}

.msgBoxModal:hover {
    background-color: rgb(213, 233, 255);
}

.searchIcon--container > svg {
    margin: 5px 0 0 0;
}
`;

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

  onClick(){
    var svgState = document.getElementById("NotificationListModal");
  };

  reset(){
    let f = document.getElementById("searchInput")?.nodeValue
    f = "";
};
 
  render() {

    return (
        
    <HeaderStyledComponent>

        <Router.Link to="/"className="svgLogo">LOGO</Router.Link>
     
        <form className="searchForm" id="searchForm">

            <div className="searchIcon--container">

                <SearchIcon/>
            
            </div>

            <input className="searchInput" id="searchInput" type="search" /*maxlength="10" readonly form_id=""*/ name="" placeholder={ props.placeholderSelectedLanguage } onFocus={ () => {} } autoComplete="off"/>

            <input className="resetInput" value="reset "type="reset" onClick={ () => this.reset() }/>

        </form>

        <div className="btns-header">

            <button onClick={ () => {} } id="NotificationListModal" className="NotificationListModal">

                <NotificationIcon/>

            </button>

            <button onClick={ () => {} } className="msgBoxModal">

                <MessageIcon/>

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

    </HeaderStyledComponent>

    )
  }
};

