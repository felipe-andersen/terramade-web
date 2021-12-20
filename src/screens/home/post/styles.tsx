import * as React from "react"
import styled from "styled-components";

export const StyledPostComponent = styled.div`
    width: 100%;
    height: max-content;

    //min-width: 100%;
    //max-heigth: 120px;
    
    background-color: transparent;

    display: column;
    //flex-direction: inline-block;
    //justify-content: center;
    //align-items: center;
    //border: 1px solid red;
    //box-shadow: 1px 1px 1px red;
    //box-sizing: border-box;
    padding: none;
    margin: 0 0 10px 0;
  
    break-inside: avoid;
    //wrap: no-wrap;

    //font-family: none;
    font-size: 14px;
    //text-align: center;
    //text-decoration: none;
    overflow: hidden;
    a {
        text-decoration: none;
        color: black;
    }

    .postImg--container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        background-color: red;
        padding: 0;
        position: relative;
        margin: 0;
        overflow: hidden;
     
        
        /*
        a.btns-container {
            width: 100%;
            height: 100%;
            opacity: 0;
            display: flex;
            position: absolute;
            margin: 0 0 0 0;
            background-color: rgb(240, 229, 229);
            padding: 0;
        }
*/
        .mask--container {
            width: 100%;
            height: 100%;
            position:absolute;
            background-color: transparent;
            display: flex;
            justify-content: space-between;
            align-items: space-between;
            box-sizing: border-box;
            margin: 0;
            padding:0;
            border-radius: 20px;

            :hover {
                background-color: rgba(1,1,1,0.3);
                
                button.shareBtn, button.moreBtn {
                    display: flex;
                }
            }

            button.shareBtn, button.moreBtn {
                width: 28px;
                height: 28px;
                background-color: white;
                border-radius: 50%;
                display: none;
                justify-content: center;
                align-items: center;
                border: none;
            }
        }
    }

    .postImg {
    

        width: 100%;
        //z-index: -1;
        margin: 0;
        border-radius: 20px;
    }

    .imgAcount-constructionDiaryAcount--container {
        display: flex;
        justify-content: space-between;
        padding: 8px 8px;
    }

    .ballonIcon > svg {
        transform: scale(50%);
        /* Copy this @keyframes block to your CSS*/
        fill: red;
        animation: ballonIconAnimation 6s ease 0s infinite normal none;
        
        @keyframes ballonIconAnimation {
        0.0%{
        transform: translate(0,20px);
        }
        35.7%{
        transform: translate(0,-80px);
        }
        99.4%{
        }
   }


/* Add the animation: property to whichever element you want to animate */
#elementToAnimate{
    animation: yourAnimation 6s ease 0s infinite normal none;
}/* Copy this @keyframes block to your CSS*/
@keyframes yourAnimation {
    0.0%{
        transform: translate(0,20px);
    }
    35.7%{
        transform: translate(0,-20px);
    }
    99.4%{
    }
}


/* Add the animation: property to whichever element you want to animate */
#elementToAnimate{
    animation: yourAnimation 6s ease 0s infinite normal none;
}

    }



.imgAcount-container {
    width: max-content;
    height: 24px;
    background-color: #f1f1f1b1; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    padding: 0px 4px ;
    border-radius: 5px;
}

.imgAcount {
    
    font-weight: 600;
}

.PhotoCollectionsIcon--container > svg {
    transform: scale(80%);
}

.constructionDiaryAcount-container {
    width: 40px;
    height: 40px;
    background-color: #1b1b1bcc; 
    display: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    > p {
        text-align: center;
        margin:  -1px 0 0 0;
        
        span {
          color: white;
          font-weight: 600;
          text-align: center;
          //line-height: 1;
        }

        span.text {
            font-size: 11px;
        }
        
        span.count {

        }
    }
}

.btns-container {
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    position: absolute;
    margin: 0 0 0 0;
    background-color: rgb(240, 229, 229);
    padding: 0;

}

.writenContentGroup {
    width:100%;
    box-sizing: border-box;
    padding:8px 0px 8px 0px;
    background-color: transparent;
    margin: -16px 0 0px 0 ;

  

    a.{
 
        p{
            margin: -12px  0 0px 0;
        }
    }

    .reactionBtns {
        height:20px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 2px 0 0 0 ;
        box-sizing: border-box;

        button.reaction {
            width: 20px;
            height:  20px;
            border-radius: 50%;
            background-color: black;
            margin: 0 -4px 0px 5px;
        }

        p.reactionsAcount {
            width: max-content;
            height: max-content;
            border-radius: 10px;
            background-color: rgb(255, 0, 0);
            padding: 0 2px;
        }

        button.handleView {
            display: none;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: rgb(47, 45, 73);
            margin: 0 -4px 0px 5px;
        }
    } 
}

  .postContent {
   
  }

  h2 {
    font-size: 13.5px;
  }

  @media (max-width: 1350px){

  }

  @media (max-width: 980px){

  }

  @media (max-width: 700px){

  }

  @media (max-width: 480px){

  } 
`;