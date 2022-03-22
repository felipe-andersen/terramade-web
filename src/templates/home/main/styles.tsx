import * as React from "react";

import styled from "styled-components";

export const Div = styled.div`
  margin: -10px 0 0 0;
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  background-color: white;

  
  .hashtagsList--container {
      width: 100%;
      height: 56px;
      background-color: white;
      display: none;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      position: relative;
      margin: 0;
      background-color: white;
      position: fixed;
      z-index: 1050;
  
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

      .hashtagsList {
        display: flex;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content:  center;
        align-items: center;
        margin: 0;
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
 

  .gridFeed {
    justify-content: center;
    column-width: 240px;
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
      width: 50px
      height: 18px;
      background-color: rgba(1,1,1,0.8);
      border: none;
    }
  }
*/

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


  .imgAcount {

  }

  .videoTime {

  }

  .keywords--container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 35px;
    background-color: red;
  }
  
  .postADD {
    width: 60px;   
    height: 60px;
    display: flex;
    background-color: #bd3d3d;
    align-items: center;
    border: none;
    border-radius: 500px;
    margin: 90vh 0 0 64vw;

  }
  //-----------------------------------------------------------------------------------
  @media (max-width: 1350px){
    .gridFeed {

  }

  .add-post-button {

  }

  .highlightedShorts {


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
    .highlightedShorts {
    justify-content: flex-start;
    padding:  8px 16px 16px 8px;
    align-items:center;
    button.previusBtn, button.nextBtn{
      display: none;
    }
  }
  }

  // ------------------------------------------------------------------------------------------------

  @media (max-width: 550px){
    .gridFeed {
      column-width: auto;
      column-count: 2;
      column-gap: 5px;
      padding: 0 3px;
  }

  .add-post-button {

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