import styled from "styled-components";

export const StyledMainComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //margin: -81px 0 0px 0;
  //position: relative;
  ///position: fixed;
  //z-index: 2000;
  /box-shadow: 0px 1px 4px rgba(180,180,180, 0.5);
  //box-sizing: border-box;
  /*.headerComponent {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  margin: -81px 0 0 0;
  background-color: #dadada;
  position: fixed;
  z-index: 99;*/

  .form--container {
    width: 50%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .formInfo {
      width: 100%;
      text-align: center;

      p {
        color: #424242;
        font-weight: 600;
        
        :hover {
          color: blue;
        }
      }
    }

    form.signInLogIn {
      width: 50%; 
      display: column;
      justify-content: center;
      align-items: center;
      //background-color: #86653a;
      margin: 0 25px 0px 0;
      box-sizing: border-box;
      //border: 1px solid #969696;
      padding: 0;

      .alert--container {
        width: 100%;
        padding: 8px;
        border: 2px solid #043000;
        margin: 0 0px 16px 0;
        box-sizing: border-box;
        background-color: #bcff7d;
        border-radius: 4px;
      }

      label {
        width: 100%;
        display: column;
        height: 45px;
        align-items: center;
        justify-content: center;

        .label-EmailValidateInfo--container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px 0 10px;  
        }

        .label-senhaValidateInfo--container{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px 0 10px; 
        }
      }
     
      .inputEmail--container, .inputPassword--container {
        width: 100%;   
        height: 40px;
        display: flex;
        align-items: center;
        border: 2px solid #969696;
        margin: 8px 0 8px 0;  
        border-radius: 23px;

        > input {
          width: 90%;
      
          border: none;
          margin: 0 0 0 8px;
          outline: none;

          ::placeholder {
            margin: 0 0 0 8px;
            font-size: 14px;
          }
        }
      }

      p.emailKeywordForgot {
        width: 100%;
        margin: -5px 0 16px 0;
        text-align: right;
        color: grey;

        :hover {
          color: blue;
        }  
      }
  
      .inputSubmitFor {
        width: 100%;
        height: 35px;
        background-color: #311c0f;
        border-radius: 8px;
      }

      .inputSubmit {
        display: flex;
      }
    }
  }

  .socialAuth--container {
    width: 50%;
    height: 100%;
    border-left: 1px solid #d1d1d1;
  }

`;