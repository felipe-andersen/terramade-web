import * as React from "react"
import styled from "styled-components";

export const StyledPostComponent = styled.div`
    width: 100%;
    //min-width: 100%;
    //max-heigth: 120px;
    height: max-content;
    background-color: transparent;
    border-radius: 5px;
    //display: flex;
    //flex-direction: inline-block;
    //justify-content: center;
    //align-items: center;
    //border: 1px solid red;
    //box-shadow: 1px 1px 1px red;
    //box-sizing: border-box;
    padding: none;
    // margin: 0;
    overflow: hidden;
    break-inside: avoid;
    //wrap: no-wrap;

    //font-family: none;
    font-size: 14px;
    //text-align: center;
    //text-decoration: none;

    a {
        text-decoration: none;
        color: black;
    }

    .postImg--Container {
        height: max-content
        background-color: transparent;
        position: relative;

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

        .mask--container {
            width: 100%;
            height: 100%;
            position:absolute;
            background-color: transparent;
            display: column;
            justify-content: space-between;
            align-items: space-between;

            :hover {
                background-color: rgba(1,1,1,0.3);
            }

            button.shareBtn, button.moreBtn {
                width: 35px;
                height: 35px;
                background-color: white;;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
            }
        }
    }

    .postImg {
        width: 100%;
        height: none;
        border-radius: 5px;
        z-index: -1;
    }

    .imgAcount-constructionDiaryAcount--container {
        display: flex;
        justify-content: space-between;
        padding: 8px 8px;
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
}

.imgAcount {
    
    font-weight: 600;
}

.PhotoCollectionsIcon--container > svg {
    transform: scale(80%);
}

.constructionDiaryAcount-container {
    width: 35px;
    height: 35px;
    background-color: #1b1b1bcc; 
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    p {
      color: white;
      font-weight: 600;
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
    padding:0px 12px 8px 14px ;
    background-color: rgb(255, 255, 255);

    .reactionBtns {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 40px 0 0 0 ;

        button.reaction {
            width: 35px;
            height: 35px;
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
    font-size: 15px;
}
`;