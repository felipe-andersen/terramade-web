import * as React from "react";

import styled from "styled-components";

export const MainComponentStyled = styled.div`
  margin: 15px 0 0 0;
  box-sizing: border-box;
  //padding: 0 28px;
  width: 100%;
  background-color: white;

  .gridFeed {
    column-width: 236px;
    column-gap: 16px;
    break-inside: avoid;
    margin: 0;
    padding: 0 28px;
  }

  .add-post-button {
    display: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 5px 10px grey;
    position: absolute;
    align-self: flex-end;
    z-index: 10000;
    background-color: white;
    margin-top: none;
  }
/*
  .highlightedShorts--container {
    width: 100%;
    height: max-content;
    display: column; 
    justify-content: center;
    align-items:center;

    button.hiddenBtn {
    width: 50px;
      height: 18px;
      background-color: rgba(1,1,1,0.8);
      border: none;

  }

  }
  
*/

  .highlightedShorts {
    box-sizing: border-box;
    display: flex; 
    width: 100vw;
    height: max-content;
    justify-content: center;
    align-items:center;
    margin: 14px 0 16px 0;
    padding:  24px 15%;
    background-color: rgba(1,1,1,0.8);
   
    button.previusBtn, button.nextBtn{
      width: 50px;
      height: 50px;
      background-color: rgba(1,1,1,0.8);
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
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 8px 0 0px;
    overflow: hidden;
   

    .short { 
      display: flex;
      flex-direction: column;
      align-items: center;
      //   width: 170px;
      height: 170px; // +1350px | 1350px | 850px | 650px | 450px
      background-color: black;
      justify-content: flex-end;
      border-radius: 15px;
     
      position: relative;

      img.videoCover {
        height: 100%;
     
      }

      .mask {
        width: 100%;
        height: 100%;
        background:linear-gradient(to bottom, transparent, black);
        position: absolute;
        z-index: 1001;
      }

      .mask {
        width: 100%;
        height: 100%;
        background:linear-gradient(to bottom, rgba(1,1,1,0.3), rgba(1,1,1,0.8), black );
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
      height: 3vw;
      width: 3vw;
      border-radius: 50%;
      overflow: hidden;  
      margin: -1.7vw  0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1010;
      border: 0.2vw solid white;
    }

    .shortContentText {
      width: 70%;
      height: 20px;
      overflow:hidden;
      font-weight: 600;
      text-align: center;

      margin: 2px 0 0 0;
    }
  }

  .mask {
        width: 100%;
        height: 100%;
        background:linear-gradient(to bottom, transparent, black);
        position: absolute;
        z-index: 1001;
      }

  .imgAcount {

  }

  .videoTime {

  }

  .
.keywords--container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 35px;
    background-color: red;
}

  //-----------------------------------------------------------------------------------
  @media (max-width: 1350px){
    .gridFeed {

  }

  .add-post-button {

  }

  .highlightedShorts {
    padding: 0;

    button.previusBtn, button.nextBtn{

    }
  }
  
  .short--container {

    .short {


      img.videoCover {
     
      }

      .mask {

      }

      .mask {

      }

      .picNameProfession-container {
   
        .nameProfession--container {

          .name {

          }        
        }
      }
    }

    .storiePic--container {

    }

    .shortContentText {

    }
  }

  .imgAcount {

  }

  .videoTime {

  }

  }

  //-------------------------------------------------------
  
  @media (max-width: 980){

  }

  @media (max-width: 700px){
   
  }

  // ------------------------------------------------------------------------------------------------

  @media (max-width: 550px){
    .gridFeed {
      column-width: auto;
      column-count: 2;
      column-gap: 8px;
  }

  .add-post-button {

  }

  .highlightedShorts {
    justify-content: flex-start;

    button.previusBtn, button.nextBtn{
      display: none;
    }
  }
  
  .short--container {
    width: 100px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 8px 0 0px;

    .short {
      width: 100px; 
      height: 170px; 

      img.videoCover {
     
      }

      .mask {

      }

      .mask {

      }

      .picNameProfession-container {
   
        .nameProfession--container {

          .name {

          }        
        }
      }
    }

    .storiePic--container {
      height: 8vw;
      width: 8vw;
      margin: -4vw 0 0 0;
    }

    .shortContentText {

    }
  }

  .imgAcount {

  }

  .videoTime {

  }
   
  }

  //------------------------------------------------------------------------------------------------
 
`;