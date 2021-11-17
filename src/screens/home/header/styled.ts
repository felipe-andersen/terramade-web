import * as React from "react";
import styled from "styled-components";




export const HeaderStyledComponent = styled.div`

    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    margin: -81px 0 0 0;
    background-color: white;

    position: fixed;
    z-index: 99;

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

.pictureImage-moreAcountModal {
    display: flex;
    align-items: center;
}

.pictureImage-div {

    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    
    border: 10px solid rgba(245, 245, 245, 0);
    background-color: transparent;
}

.pictureImage-div:hover {
    background-color: rgb(213, 233, 255);
}

.pictureImage {
    width: 38px;
    height: 38px;
    overflow: hidden;
    border-radius: 50%;
    border: none;
}

.moreAcountModal {
    width: 25px;
    height: 25px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 0 0 0;
    border: none;;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
}

.moreAcountModal:hover {
   
    background-color: rgb(222, 228, 236);
   
   
    
}

.searchcInput {
    width: 30%;
    height: 40px;
 
    background-color: rgb(233, 233, 233);
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: none;
    display: flex;
    align-items: center;
    overflow: hidden;

    
}

#searchInput {
    width: 95%;
    height: 95%;
    font-size: 16px;
    outline: none;
    border: none;
   
    background-color: transparent;
}
.svg-source {
    width: 50px;
    height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

#searchInput::placeholder {
    font-size: 16px;
    color: grey;
}

#searchInput:focus{
   border: 1px solid blue;
}

#searchcInput::-webkit-input-placeholder {
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

.btns-header {
    display: flex;
}

.NotificationListModal {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 8px 0 0;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(240, 229, 229);
}

.NotificationListModal:hover {
    background-color: rgb(213, 233, 255);
    border: 3px solid rgb(53, 117, 253);
}

.NotificationListModal:focus {
    background-color: rgb(97, 71, 71);
    border: 3px solid rgb(97, 71, 71);
    
}

.NotificationListModal:focus {
  
    border: 1px solid white;
    
}

.msgBoxModal {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(240, 229, 229);
}

.msgBoxModal:hover {
    background-color: rgb(213, 233, 255);
}

`;