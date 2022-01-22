import * as React from "react";

import { FollowersUserNameProfileImageMolecule } from "../../../componentLibrary/molecules";

import { PostProps } from "../../home/post";
import * as Router from "react-router-dom";

import "./styles.css";
/*
let { postList, setPost } = usePostList();

let noFound = "Desculpe! Não consegui buscar.";
console.log( noFound )

 //postList.map( p => p .key === "key"? true : noFound );

let adapter: MainPostViewProps = {
  setPost: setPost,
  post: postList.map( p => p .key === "key"? true : noFound )

};
*/
interface MainPostViewProps {
  setPost: React.Dispatch<React.SetStateAction<PostProps[]>>;
  post: object;
};

export class MainPostView extends React.Component {
  state = {
    post: {
      title: "Travel Home",
      content: "I had every intention to have the launch of Travel Home go live on last Tuesday but, as often happens, life got crazy around here with the release. I wanted to have a chance to thank everyone who bought the book, wrote me kind messages, and/or showed up to the launch party we had here",
      reactions: "35",
      link: "www.mask.link",
      dateTime: "Há 15 min Editado",

    }
   
  };
  
  onChange( event: any ){
    const { name, value } = event.target;
    const obj = { [name]: value };
    console.log( obj )
  };
  
  onSubmit( event: any ) {
    event.preventDefault();
      /*
      axios.post('http://localhost:5000/promotions', values)
        .then((response) => {
          history.push('/');
        });*/
  };
  
  animationHeader(){
    window.addEventListener("scroll", function(){
      console.log("ok")
    }
    )
  }

    
  render(): JSX.Element {
    return  (
      <div>
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
         
          <p>{this.state.post.dateTime}</p>
    
          <article className="post-article">
            <img/>
            <div className="readme">
  
              <h3>{this.state.post.title}</h3>
              <div className="content">
                <button className="readMoreBtn"></button>
                {this.state.post.content}
              </div>
              <div className="link-readMoreBtn-container">
                <a href="" title="">{ this.state.post.link }</a>
                {/*<button title="" className="" id="" onClick={ () => {} }>read more</button>*/}
              </div>
   
            </div>
            <div className="div">
     
            </div>
          </article>
        </section> 
        </div>
      </div>
      </div>
    )
  }
}

// verificar qual tipo de de dispositivo e OS e personalizar experiencias nativas