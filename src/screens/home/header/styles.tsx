import * as React from "react";
import styled from "styled-components";

const notification = "Notificação";


export const HeaderStyledComponent = styled.div`

    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 0px solid #eeeeee;
    margin: -81px 0 0px 0;
    background-color: white;
    position: relative;
    position: fixed;
    z-index: 2000;
    box-shadow: 0px 1px 4px rgba(180,180,180, 0.5);
    padding: 6px 0;
    box-sizing: border-box;
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

.userSettingsModalBtns {
    width: 70px;
    height: 100%;
overflow: hidden;
border-radius: 9px;
margin: 0 8px 0 0;
border:none;
display: flex;
justify-content: center;
align-items: center;


  :hover {
    background-color: rgb(220, 220, 220, 0.8);
  }
}

.pictureImage--container {
    display: flex;
justify-content: center;
align-items: center;
    width: 25px;
    height: 25px;
    overflow: hidden;
    border-radius: 50%;
    border: none;
    background-color: none;
}



.pictureImage {
 
    height: 100%;
}

.moreAcountModal {
    width: 25px;
    height: 25px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 0 0 0;
    border: none;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: none;
}

.moreAcountModal:hover {
    background-color: rgb(222, 228, 236);
}

.searchForm {
    width: 60%;
    height: 46px;
    display:flex;
    background-color: rgba(231, 231, 231, 0.7);
    align-items: center;
    justify-content: space-between;
    border-radius: 23px;
    //border: 3px solid black;


    :hover {
        background-color: rgba(220, 220, 220, 1);
    }

    :target {
        border: 2px solid blue;
    }   
   
}

.searchInput {
    width: 80%;
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
    color: #666161;
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

.resetInputLabel {
    width: 40px;
    height: 40px;
    margin: 0 0 0 -40px;
    background-color: transparent;
    display:none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.resetInputLabel > svg {
    fill:#797979;
}

.resetInput {
    width: 40px;
    margin: 0 0 0 -40px;
    display: none;
}

.ImageSearchIcon-KeyboardVoiceIcon--container {
    width: 11%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    margin:  0px 5px 0px 0px;
}

.btns-header {
    display: flex;
    background-color: transparent;
    height: 100%;
}

.modal-group {
  height: 87vh;
  width: 27vw;
  background-color: white;
  display: none;
  border-radius: 8px;
  position: absolute;
  margin: 610px -67vw 0px 0px;
  box-sizing: border-box;
  padding: 8px 8px 8px 8px;
}

.NotificationListModal {
    width: 70px;

    overflow: hidden;
    border-radius: 9px;
    margin: 0 8px 0 0;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  
}

.NotificationListModal > svg {
    fill: #797979;
}

.NotificationListModal:hover {
  
    background-color: rgb(220, 220, 220, 0.8);
    :after {
    content: "notification";
    position: absolute;
    color: white;
    font-size: 13px;
    height: 30px;
    padding: 0px 10px;
    background-color: rgba(39, 39, 39, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    margin: 85px 0px 0px 0px ;
    }    
}

/*
.svg:hover {
  .child {

 
    color: white;
    font-size: 13px;
    height: 30px;
    padding: 0px 10px;
    background-color: rgba(39, 39, 39, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    margin: 100px 0px 0px 0px ;

    }
}

*/ 

.NotificationListModal:focus {
    background-color: rgb(97, 71, 71);
    border: 3px solid rgb(97, 71, 71);
    
     svg {
    fill: #ffffff;
    }
}

.NotificationListModal:focus {
    border: 1px solid white;
}

title {
    color: tomato;
}

.msgBoxModal {
    width: 70px;
    overflow: hidden;
    border-radius: 9px;
    margin: 0 8px 0 0;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    :hover {
    background-color: rgb(220, 220, 220, 0.8);
}

}

.msgBoxModal > div >svg {
    fill: #797979;

}

.searchIcon--container > svg {
margin: 5px 0 0 0;

}

.KeyboardVoiceIcon--container {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: transparent;
}

.ImageSearchIcon--container {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: transparent;
}

.KeyboardVoiceIcon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    
    :hover {
        background-color: transparent;
    animation: KeyboardVoiceIcon-Animation 1.7s 0s infinite normal none;

      svg {
        fill: white;
      }
    }
}

@keyframes KeyboardVoiceIcon-Animation {
    0%{
        transform: scale(2);
    };

    1%{
        transform: scale(1.5);
    };

    13%{
        transform: scale(1.5);
    };

    14%{
        transform: scale(1.5);
        color: white;
    };
}

.KeyboardVoiceIcon > svg {
    fill:#797979;
}
`;

const toggle = () => {
  const element = document.getElementById( "NotificationListModal" );
};