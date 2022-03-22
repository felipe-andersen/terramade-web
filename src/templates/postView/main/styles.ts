import * as React from "react";
import styled from "styled-components";

export const Div =  styled.div`





.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
}
.post-container {
    display: flex;
    width: 75%;
    justify-content: space-between;
}


.img-container {
    overflow: hidden;
    width: 50%;
}
.img-container > img {
    width: 100%;
    border-radius: 10px;


 
}
.reactionsBtns-modal--container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
}
.postReadme {

    width: 48%;
    background-color: transparent;
    padding: 0  25px 25px 25px;
}

.postReadme > p {
    font-size: 14px;
}




.readme > .content {
    font-size: 15px;
    position: relative;
    background-color: none;
    height: 100px;
}

.readme > a {
    font-size: 20px;
    width: 300px;
    height: 3vw;
    text-decoration: none;
    color: black;
    background-color: none;
    font-weight: 700;
     
}

.readMoreBtn {
    width: 100%;
    height: 40px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    display: flex;
    justify-content: center;
    margin: calc(100px - 40px) 0 ;


    

}

.post {
    padding: 25px;
}

.molecule-followBtn--container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
}

.post-article{
  margin: -50px 0 0 0;
}

.link-readMoreBtn-container{
    display: flex;
}

.link-readMoreBtn-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
}

.link-readMoreBtn-container > a{
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 300px;
    height: 3vw;
    text-decoration: none;
    color: rgb(0, 81, 255);
    background-color: transparent;
    font-weight: 700;
    font-size: 15px;
   
}



.division {
    padding: 8px;
    background-color: blue;
    margin: 8px 0 0 0;
}

.division {
  color: white;
}

`;