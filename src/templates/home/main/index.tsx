import * as React from 'react';
import { UserList } from "../../../assets/dataSet/users";
import { context_providers_hooks } from '../../../context';
import { PostComponent } from './child/post';
import styled from "styled-components";
import { Div } from "./styles";
import * as Router from "react-router-dom";
import { ImageSearchIcon } from '../../../libs/icons/imageSearch';
import { HighlightedShortsProfessionals } from './child/highlighted-shorts-professionals-modal';
import { usePosts } from '../../../context/post';
import * as Styled from "styled-components"

// Components que não podem ter seu estado alterado, precisam tomar cuidado com renderização dinamica

export interface MainProtocol {
  HomeNodes?: MainNodesProtocol
  props:MainPropsProtocol
};

interface MainPropsProtocol {
  hideShowChildElement: string;
}

interface MainNodesProtocol {};

export const MainComponent = (MainProps:MainProtocol):JSX.Element => {

  //const {} = childComponents;

  const { posts, setPosts } = usePosts();

  const [main, setMain] = React.useState<MainPropsProtocol>(MainProps.props);

  return (
    <Div>
      <section className="hashtagsList--container">
        <span className="previewBtn"></span>
        <div className="hashtagsList">
     
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
      <HighlightedShortsProfessionals display={main.hideShowChildElement}/>
      <div className="gridFeed">
        {/*
          posts.map( post => {
            return 
            PostComponent({post})
          })*/
        }
        {
        posts.map( post => {
          return (
            <PostComponent post={post}/>
          )
        })
      }
      </div>
  
      <button className="postADD" id="" onClick={ () => {} }>

      </button>

      </Div>
    )
  }
;






