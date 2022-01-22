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
  background-color: whitesmoke; //rgba(0,0,0,0.9);


  .signInLogIn--container {
    width: 50%;
    height: 85vh;
    display: column;
    justify-content: center;
    background-color: white;
    padding:  15px 25px 25px 25px;
    border-radius: 9px;


    .logo--container {
      margin: 0 0 -15px 0;  
      width: 100%;
      height: 70px;
      margin: 0 0 -15px 0;
      display: flex;
      justify-content:center;
      align-items: center; 
    }


    .logo {
      display: flex;
      justify-content:center;
      align-items: center;

      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color:#311c0f;
      font-size: 35px;
      color: white;
      font-weight: 600;
         
    }

    > h1 {
      font-size: 28px;
      text-align: center;
    }

      .green {
        width: 100%;
        padding: 8px;
        min-height: 35px;
        border: 2px solid #30a04a;
        margin: 0 0px 16px 0;
        box-sizing: border-box;
        background-color: #30a04a;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:white;

        > p {
          width: 90%;
         
        }

        > svg {
          fill: white.
        }
      }

      .red {
        width: 100%;
        padding: 8px;
        border: 2px solid #e33a2b;
        margin: 0 0px 16px 0;
        box-sizing: border-box;
        background-color: #e33a2b;
        border-radius: 4px;
        display: none;
        justify-content: space-between;
        align-items: center;
        color:white;

        > p {
          width: 90%;
        }

        > svg {
          fill: white;
        }
      }

      .yellow {
        width: 100%;
        padding: 8px;
        border: 2px solid  #eb9f2d;
        margin: 0 0px 16px 0;
        box-sizing: border-box;
        background-color: #eb9f2d;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:white;

        > p {
          width: 90%;
        }

        > svg {
          fill: white;
        }
      }

    .formInfo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    

      a {
        color: #424242;
        font-weight: 600;
        
        :hover {
          color:#311c0f;;
        }
      }
    }

    .form-socialAuht--container {
      width: 100%;
     height: max-content;
     display: flex;
     justify-content: center;
 
     background-color: white;
   
     border-radius: 9px;
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

      label {

        .label-EmailValidateInfo--container {
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px 0 10px;
          overflow: hidden;
          box-sizing: border-box;

          span {
            color: grey;
          }

          .invalidEmail {
            color: red;
          }

          > span > svg {
            fill: #30a04a;
          }
        }

        .label-passWordValidateInfo--container{
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0 10px 0 10px;
          
          > span > svg {
            fill: #30a04a;
          }

          > .checkout {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            box-sizing: border-box;
          }
        }
      }
     
      .inputEmail--container, .inputPassword--container {
        width: 100%;   
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        //border: 2px solid #311c0f;
        margin: 8px 0 8px 0;  
        border-radius: 23px;
        padding: 0 10px;
        box-sizing: border-box;
        background-color: #e2e2e2;

        > input {
          width: 90%;
          background-color: transparent;
          border: none;
          margin: 0 0 0 0px;
          outline: none;
          font-size: 16px;

          ::placeholder {
            color: grey;
            font-size: 14px;
          }
        }

        .emailResetInputLabel {
          width: 18px;   
          height: 18px;
          background-color: #e2e2e2;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

           > svg {
             transform: scale(80%)
           }

          .emailResetInput {
            display: none;
          }
        }
      }
      .VisibilityEyeIcon--container {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(70%)
      }
    

      .VisibilityEyeOffIcon--container {
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
        transform: scale(60%)
       
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
  
      .submitInput--Label {
        width: 100%;
        height: 40px;
        background-color: #311c0f;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 600;
        position: relative;

        .eastIcon--container {
          display: none;
        }

        :hover {
          .eastIcon--container {
            display: flex;
            position: absolute;
            margin: 0 0 0 90%;
            background-color: #311c0f;

            > svg {
              fill: white;
              transform: scale(80%);
            }

          }
        }
      }

      .submitInput {
        display: none;
      }

      .captcha {
        margin: 20px 0 20px 0;
        display: flex;
      }
    }

    .help-suport {
      color: #424242;
      font-weight: 600;
        
      :hover {
        color: #311c0f;;
      }
    }
  }

  .line {
    width: 1px;
    height: 100%;
    border: 1px solid #d1d1d1;
  }

  .socialAuth--container {
    width: 50%;
    height: 100%;
    margin: 35px 0 0px 25px; 
    border-radius: 10px;
    padding: 16px;
    background-color: #e2e2e2;

    .socialAuthBtn {
      width: 100%;   
      height: 40px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border: none;
      margin: 8px 0 8px 0;  
      border-radius: 23px;
      padding: 0 16px;
      box-sizing: border-box;
      font-weight: 600;
      color: #535353;
      font-size: 13.5px;

      .GoogleIcon--container {
        margin: 0 20px 0 0;
      }

      :hover {
        background-color: #e2e2e2;
      }

    }
  }
  
  .postADD {
    width: 50px;   
    height: 50px;
    display: flex;
    background-color: #bd3d3d;
    align-items: center;
    border: none;
  }

`;