import React, { useState } from 'react';
import { PostComponent } from './child/post';
import { Div } from "./styles";
import { ImageSearchIcon } from '../../../libs/icons/imageSearch';
import { HighlightedShortsProfessionals } from './child/highlighted-shorts-professionals-modal';
import { posts } from '../../../assets/dataSet/posts';


export interface MainProtocol {
  HomeNodes?: MainNodesProtocol
  data:MainPropsProtocol
};

interface MainPropsProtocol {
  hideShowChildElement: string;
};

interface MainNodesProtocol {};

export const MainComponent = (props:MainProtocol):JSX.Element => {

  const [main, setMain] = useState<MainPropsProtocol>(props.data);

  const PostComponentProps = {
    postProvider: posts,
  };

  return (
    <Div>
      <section className="hashtagsList--container">
        <span className="previewBtn"></span>
        <div className="hashtagsList">
          <button className="keywords" style={{backgroundColor:"#9c8f00"}}>
            {"lavanderia"}
          </button>
          <button className="keywords" title="decor" style={{backgroundColor:"rgba(255, 140, 100, 1)"}}>
            <i>
              {"#decor"}
            </i>
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
        <span className="nextBtn">
          <ImageSearchIcon/>
        </span>
      </section>
      <HighlightedShortsProfessionals display={main.hideShowChildElement}/>
      <div className="gridFeed">
        {
          PostComponentProps.postProvider.map( (post) => ( <PostComponent data={{post}}/> ))
        }
      </div>

      <button className="postADD" id="" onClick={ () => {} }>

      </button>

      </Div>
    )
  }
;






