import * as React from "react";

import styled from "styled-components";


export const MainComponentStyled = styled.div`
  margin: 15px 0 0 0;
  box-sizing: border-box;
  padding: 0 8px;
  width: 100%;
  background-color: white;

  .gridFeed {

    column-count: 5;
    column-gap: 10px;
    margin: 81px 0 0 0;
    break-inside: avoid;
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

  .highlightedShorts {
    display: flex; 
    width: 100%;
    height: max-content;
    justify-content: center;
    align-items:center;

    
    .previusBtn, .nextBtn{
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
    width: 14vw; // +1350px | 1350px | 850px | 650px | 450px
    height: 17vw; 





  

    margin: 0 8px 0 0px;
  }

  .short{ 
  
    display: flex;
    flex-direction: column;
    align-items: center;
 
    height: 210px; // +1350px | 1350px | 850px | 650px | 450px
 
    background-color: black;
    justify-content: flex-end;
    border-radius: 9px;
  
    padding: 9px 9px 0px 9px;
  }

  .storiePic--container {
    height: 4vw;
    width: 4vw;
    border-radius: 50%;
    overflow: hidden;
  
    margin: 9px 0 -2vw 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

 

  .picNameProfession-container {
    display: flex; 
    margin:8px 0 0 0;
    width: 100%;
    height: max-content;
 
    justify-content: center;
  }

  .videoCover {
    
  }

  .professionalPic {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    
    display: none;
  }

  .nameProfession--container {
    margin: 0 0 0 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > a {
      font-size: 14px;
      color: #dadada;
    }
  }

  .name {
    font-size: 16px;
    font-weight: 600;
  }

  .shortContentText {
    width: 100%;
    height: 20px;
    margin: 2.5vw 0 0 0;
    overflow:hidden;
    font-weight: 600;
 
    text-align: center;

  
  }
  
`;