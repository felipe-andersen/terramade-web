import * as React from "react"
import styled from "styled-components"


export const StyledStatusCode404Component = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .mainComponent {
    width: 60%;
    height: 80vh;  
    display: column;
    border: 1px solid #e9e9e9;
    border-radius:  10px 10px 10px 10px;
    padding: 0  25px 25px 25px;
    box-sizing: border-box;
  }

   .statuscode {
    width: 50%;
    //background-color: #b3b3b3;
   }

  .reloadBtn--container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;

    .reloadBtn {
      min-width: 100px;
      height: 70px; 
      display: flex;
      padding: 0 8px;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      color: white;
      background-color: #3d291f;
      border-radius:  25px;
    }
  }



  .more {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height:200px;
    background-color: #e0e0e0;
  }

  .oops-title {
    display: flex;
    align-items: center;
    margin: 0 0 -50px 0;

    .oops {
    font-size: 38px;
    font-weight: 600;
    }

    .title {
      font-size: 25px;
      margin: 0 0 0 35px;
      color: #3d3d3d;
    }
  }

  .paragraph {
    font-size: 30px;
  }




`;
    
