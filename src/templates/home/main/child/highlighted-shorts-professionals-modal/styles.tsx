import * as React from "react";
import * as Styled from "styled-components";

export const HighlightedShortsProfCS = Styled.default.div`
  display: flex;
.highlightedShorts {
    box-sizing: border-box;
    display: flex; 
    width: 100%;
    height: max-content;
    justify-content: flex-start;
    align-items:center;
    margin: 15px 0 16px 0;
    padding:  60px 25px 40px 25px;
    background-color: #1a1a1a;
    scroll-behavior: smooth;
    overflow-x: auto; 
   
    button.previusBtn, button.nextBtn{
      width: 50px;
      height: 50px;
      background-color: #161616;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      outline: none;
      border: none;
    }
  }
  
  .short--container {
    // +1350px | 1350px | 850px | 650px | 450px
    width: 160px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 16px 0 0px;
    background-color: #353535e4;
    border-radius: 15px;
   

    .short { 

      display: flex;
      flex-direction: column;
      align-items: center;
      width: 160px;
      height: 170px; // +1350px | 1350px | 850px | 650px | 450px
    
      justify-content: center;
      border-radius: 15px;
     
      position: relative;

      background-color: blue;
      overflow: hidden;
      img.videoCover {
        width: 100%; //or height: 
     
      }

      .mask {
        width: 100%;
        height: 100%;

        background-color: rgba(1,1,1, 1)
        position: absolute;
        z-index: 1001;
        
      }

      .picNameProfession-container {
        width: 100%;
        height: 50%;
        display: flex; 
        align-items: flex-end;
        position: absolute;
        z-index: 1002;
        background-color: transparent;
        margin: 0 0 2vw 0;
        box-sizing: border-box;
        padding:   10px 10px  10px  10px ;
   
        .nameProfession--container {
          margin: 0 0 5px 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .name {
            font-size: 14px;
            color: #dadada;
            font-size: 16px;
            font-weight: 600;
           
            
          }        
        }
      }
    }

    .storiePic--container {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;  
      margin: -23px  0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1010;
      border: 2px solid white;
    }

    .shortContentText {
      width: 70%;

      overflow:hidden;
      font-weight: 600;
      text-align: center;
      padding: 0 0 8px 0;
      margin: 2px 0 0 0;

      a {
        color: white;
        font-weight: 400;
        font-size: 13px;
      }
    }
  }
`;