import * as React from "react";
import { FollowersUserNameProfileImageMolecule } from "../../../libs/components/molecules";
import { PostProtocol } from "../../../assets/dataSet/posts";
import * as Router from "react-router-dom";
import {Div} from "./styles";
import { EastIcon } from "../../../libs/icons/east";


interface MainProtocol {};

const edited = {
  enUS: "Edited",
  ptBR: "Editado"
};

export const MainComponent = ({}:MainProtocol) => {

  //----------API

  //----------

  const state = {
    post: {
      title: "Travel Home",
      content: "I had every intention to have the launch of Travel Home go live on last Tuesday but, as often happens, life got crazy around here with the release. I wanted to have a chance to thank everyone who bought the book, wrote me kind messages, and/or showed up to the launch party we had here",
      reactions: "35",
      link: "www.mask.link",
      dateTime: `${"15 min"} ago • ${edited.enUS}`,
    }
  };
  
    return  (
      <Div>
      <div className="main">
           
        <div className="post-container">
       
        <a className="img-container" title="imagem do post" href="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"><img className="imgPost" src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"/></a>
        <section className="postReadme">
          <div className="reactionsBtns-modal--container">
            <button title="optiosPostModal" className="optiosModal" id="" onClick={ () => {} }>molecule reactiosn</button>
            <button title="optiosPostModal" className="optiosPostModal" id="" onClick={ () => {} }>optiosModal</button>
            {/*<Router.Link to="/postedit">editar</Router.Link>*/}
          </div>
         
          <div className="molecule-followBtn--container">
            <FollowersUserNameProfileImageMolecule/>
            <button title="" className="" id="" onClick={ () => {} }>seguir</button>
          </div>
         
          <p>{state.post.dateTime}</p>
    
          <article className="post-article">
            <img/>
            <div className="readme">
  
              <h3>{state.post.title}</h3>
              <div className="content">
                <button className="readMoreBtn">
                  <EastIcon/>  
                </button>
                {state.post.content}
              </div>
              <div className="link-readMoreBtn-container">
                <a href="" title="">{ state.post.link }</a>
                {/*<button title="" className="" id="" onClick={ () => {} }>read more</button>*/}
              </div>
   
            </div>
            <div className="div">
     
            </div>
          </article>
        </section> 
        </div>
      </div>
      </Div>
    )
}
