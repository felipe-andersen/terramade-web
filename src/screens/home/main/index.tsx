import React from 'react';



import { themes } from '../../../globalContext/theme';
//import { ThemeContext } from '../../global/themes';
import { PostComponent, PostProps } from "../post";
import "./styles.css";
import { usePostList } from '../../../globalContext/postsContext.d';
import * as Icons from "../../../iconComponents";


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








// quando vc passa propiedades para um component você é obrigado atulaizar o estado dele
// Components que não podem ter seu estado alterado, precisam tomar cuidado com renderização  dinamica

//const PostProvider = import( "../../global/postsContext.d" ).then( posts => posts.PostProvider );

export function MainComponent() {
    
    const { postList, setPost } = usePostList();
    return (
      <div className="GridFeed">
     
          {
            postList.map( post => { 
              return (
                <PostComponent 
                  postImageAlt={ post.postImageAlt }
                  postImageURL={ post.postImageURL }
                  reactionsAcount={ post.reactionsAcount }
                  title={ post.title }
                  content={ post.content }
                  key={ post.key }
                  hasEdited={ post.hasEdited }
                />
              )
            })
          }
       
          <button onClick={ () => {} } className="add-post-button"><svg></svg></button>
        </div>
    )
  }
;






