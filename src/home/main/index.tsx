import React, { Context } from 'react';
import { JsxExpression } from 'typescript';
import { PostComponent, PostProps } from "../post";
import "./styles.css";

/* Adapter
let props: props = {
  followersNumber: "52",
  title: "Como colocar a cortina na janela com a fac...",
  content: "Você já deve ter sentido o desconforto do excesso de...",
  postImageURL: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
  reactionsAcount: "65",
  postImageAlt: "alt de  alguma coisa"
};
*/

interface MainComponentProps {

};

interface MainProps {
  title?: string;
  content?: string;
  postImageURL?: string;
  reactionsAcount?: string; 
  postImageAlt?: string;
};

const context:Array<PostProps> = [
  {



    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    reactionsAcount: "21",
    title: "Lavagem de estofados",
    content:"dicas simples que podem economizar",
  },
  {
  
  
  
    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    reactionsAcount: "26",
    title: "Pintura de casa",
    content:"prepare a lata de tinta adicionando o reagente.."
  },
  {


    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    reactionsAcount: "35",
    title: "Mesas ergonomicas",
    content:"mesas ajustáveis e ergonomicas para todo o time"
  },
  {
 


    postImageAlt: "imagem de qualquer",
    postImageURL:"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    reactionsAcount: "78",
    title: "Titulo de algima coisa",
    content:"aguma coisa é aqui. deixe seu like"

  }
];


// quando vc passa propiedades para um component você é obrigado atulaizar o estado dele
export class MainComponent extends React.Component<MainComponentProps> {
  obj: MainProps
  constructor( props:MainComponentProps ) {
    super( props )
    this.obj = {
      title:"fedfd",
      content: "",
      postImageURL: "",
      reactionsAcount: "",
      postImageAlt: "",
    };
    this.state = this.obj;
  };

  render():JSX.Element {
    return (
      <div className="GridFeed">
        { 
          context.map( p => { 
            return (
              <PostComponent post={ { title:"fedfd",
              content: "",
              postImageURL: "",
              reactionsAcount: "",
              postImageAlt: "",}}
        
              />
            ) 
          } ) 
        }
        <button onClick={ () => {} } className="add-post-button"><svg></svg></button>
      </div>
    )
  }
};






