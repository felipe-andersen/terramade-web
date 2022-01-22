import * as React from "react";
import styled from "styled-components";

import { useAllPropriertiesHeader } from "./g";




export const HeaderStyledComponent = styled.div`
  
    width: 100%;
    display: column;
    //justify-content: space-around;
    //align-items: center;
    margin: -81px 0  0px  0px;
    position: relative;
    position: fixed;
    z-index: 2000;
    box-shadow: 0px 1px 4px rgba(180,180,180, 0.5)
    box-sizing: border-box;
    /*.headerComponent {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    margin: -81px 0 0 0;
    background-color: blue;
    position: fixed;
    z-index: 99;*/
    border-bottom: 1px solid rgb(236, 236, 236);
    background-color: white;
    .header--container {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-around;
      
      border: 0px solid #eeeeee;

      position: relative;
      box-sizing: border-box;
    }

  .info {
    position: absolute;
    color: white;
    font-size: 13px;
    height: 28px;
    padding: 0px 10px;
    background-color: rgba(39, 39, 39, 1);
    display: none;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 5px;
    margin: 85px 0px 0px 0px ;
    z-index: 100000;
  } 

    .keywords--container {
      width: 100%;
      height: 56px;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      position: relative;
  
      .previewBtn {
        width: 55px;
        height: 100%;
        background:linear-gradient(to right, white, white, white, white, white, white,rgba(255,255,255, 0.5), transparent);
        margin: 0 0 0 0;
        position: absolute;
      }

      .nextBtn {
        width: 55px;
        height: 100%;
        background:linear-gradient(to right, transparent, rgba(255,255,255, 0.5), white, white, white, white, white, white);
        margin: 0 0 0 calc(100% - 55px);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
  
      > svg {
        display: none;
        }
      }

      .keywordsList {
        display: flex;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content:  center;
        align-items: center;
      }
   
      .keywords {
        display: flex;
        align-items: center;
        height: 32px;
        padding: 0 8px 0 8px;
        border: none;
        border-radius: 50px;
        margin: 0 0px 0px 12px;
        color: white;
        font-weight: 400;
        max-width: 130px;
        text-overflow: ellipsis;
        white-space: nowrap; 
        text-overflow: ellipsis;
        font-size: 15px;

        :hover {
          opacity: 0.7;
        }
  
        .icon--container {
          width: 26px.
          height: 26px;
          border-radius: 50%;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

  .svgLogo {
    width:70px;
    height: 100%;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .form {
    width: 60%;
  
    /*height: 100vh;
    display: flex;

    justify-content: flex-start;
    background-color: #310f01;
    position: fixed;
    z-index: 65665656;*/
  
  }

  .inputGroup {
    width: 60%;
    height: 56px;
    display:flex;
    background-color: rgba(250, 250, 250,1);
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    //border: 3px solid black;
   position: relative;
    position: fixed;
    z-index: 65665656;


    .searchInputLabel {
        width: 100%;
        height: 100%;
        display:flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f3f3f3;
        :hover {
            background-color: #eeeeee;
        }
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
    display:flex;
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
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border-left: 1px solid #e2e2e2;
  }

  .btns-header {
    display: flex;
    background-color: transparent;
    height: 100%;
    justify-content: center;
    align-items: center;
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

  .NotificationListModalBtn, .msgBoxModalBtn {
    width: 46px;
    height: 46px;
    border-radius: 50px;
    margin: 0 8px 0 0;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(250, 250, 250);
    //border-bottom: 2px solid grey;
    position: relative;

    :hover {
      background-color: #eeeeee;

      .info {
        display: flex;
      }
    }
    
    :focus {
      background-color: rgb(97, 71, 71);

      svg {
        fill: #ffffff;
      }
    }

    svg {
      fill: black;
    }
  }

  .info {
    position: absolute;
    color: white;
    font-size: 13px;
    height: 28px;
    padding: 0px 10px;
    background-color: rgba(39, 39, 39, 1);
    display: none;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 5px;
    margin: 85px 0px 0px 0px ;
    z-index: 100000;
    white-space: nowrap;
  }    



  title {
    color: tomato;
  }
/*
  .msgBoxModal {
    width: 55px;
    height: 46px;
    overflow: hidden;
    border-radius: 9px;
    margin: 0 8px 0 0;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    //border-bottom: 2px solid grey;

    .msgBoxModal_ {
      display: none;
    }

    :hover {
      background-color: rgb(220, 220, 220, 0.8);
    }
  }

  .msgBoxModal > div >svg {
    fill: black;
  }
*/
  .searchIcon--container > svg {
    margin: 5px 0 0 0;
  }

  .keyboardVoiceLabel, .imputUploadLabel {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background-color: #eeeeee;

      .info {
        display: flex;

      }
    }
}

  .KeyboardVoiceIcon--container {
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
    fill: black;
  }

  @media (max-width: 480px){

    .header--container {
      display: none;
      height: 1px;
      overflow: hidden;
    } 
`;


