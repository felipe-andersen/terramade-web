import * as React from "react";

import styled from "styled-components";


export const MainComponentStyled = styled.div`
  margin: 81px 0 0 0;

  .gridFeed {
    width: 100%;  
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

  .hightlight {
    display: flex; 
    width: 100%;
    height: max-content;
    justify-content: center;
  }

  .short{ 
    width: 14%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0px;
    height: max-content;
    overflow: hidden;
  
    justify-content: center;
  }

  .storiePic--container {
    height: 8vw;
    width: 8vw;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid grey;
  }

  .picNameProfession-container {
    display: flex; 
    margin:8px 0 0 0;
    width: 100%;
    height: max-content;
 
    justify-content: center;
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
  }

  .name {
    font-size: 16px;
    font-weight: 600;
  }
  
`;