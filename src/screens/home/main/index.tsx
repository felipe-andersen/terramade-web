import * as React from 'react';
import { UserList } from "../../../assets/dataSet/users";
import { usePostList  } from '../../../globalContext/post';
import { PostComponent, PostProps } from "../post";
import styled from "styled-components";
import { MainComponentStyled } from "./styles";
import * as Router from "react-router-dom";
import { ImageSearchIcon } from '../../../libs/icons/imageSearch';
import { hashtagsList } from "./h";
import { HighlightedShortsProfessionals } from '../highlighted-shorts-professionals-modal';

// Components que não podem ter seu estado alterado, precisam tomar cuidado com renderização dinamica

interface IMainComponent {
  hideShowChildElement: string;
}


const hashtagsProvider = hashtagsList;

export function MainComponent({hideShowChildElement}:IMainComponent):JSX.Element {
  const { postList, setPost } = usePostList();
  return (
    <MainComponentStyled>
      <section className="hashtagsList--container">
        <span className="previewBtn"></span>
        <div className="hashtagsList"> 
        {
          hashtagsProvider.map( i => {
            return (
              <button title="" className="keywords" style={{backgroundColor:"rgba(255, 102, 89, 1)"}}>{"louça"}</button>
            )
          })
        }
          <button className="keywords" style={{backgroundColor:"#9c8f00"}}>{"lavanderia"}</button>
          <button className="keywords" title="decor" style={{backgroundColor:"rgba(255, 140, 100, 1)"}}>
            <i>#decor</i>
          </button>
          <button className="keywords" style={{backgroundColor:"rgba(255, 102, 89, 1)"}}>{"louça"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"pintura"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#cimento queimado"}</button>
          <button className="keywords" style={{backgroundColor:"#9c8f00"}}>{"lavanderia"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(255, 140, 100, 1)"}}>{"#porcelanato"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(255, 102, 89, 1)"}}>{"DIY"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"shingle"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#standby"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"bar"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#arquiday"}</button>
          <button className="keywords" style={{backgroundColor:"#9c8f00"}}>{"lavanderia"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"shingle"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#standby"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(124, 106, 124, 1)"}}>{"bar"}</button>
          <button className="keywords" style={{backgroundColor:"rgba(162, 160, 168, 1)"}}>{"#arquiday"}</button>
          <button className="keywords" style={{backgroundColor:"#9c8f00"}}>{"lavanderia"}</button>
        </div>
        <span className="nextBtn"><ImageSearchIcon/></span>
      </section>
      <HighlightedShortsProfessionals display={hideShowChildElement}/>
      <div className="gridFeed">
      {
        postList.map( post => {
          return (
            <PostComponent 
              postImageAlt={post.postImageAlt}
              postImageURL={ post.postImageURL }
              reactionsAcount={ post.reactionsAcount }
              title={ post.title }
              content={ post.content}
              key={ post.key }
              hasEdited={ post.hasEdited }
              userName={ "João Neto"}
              profileImageID={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"}
              followersAcount={5}
              state={"SP"}
              city={"São Paulo"}
            />
          )
        })
      }
      </div>
      <button className="postADD" id="" onClick={ () => {} }>

      </button>
      </MainComponentStyled>
    )
  }
;






