import * as React from "react";
import "./styles.css";
import { KitTranslate } from "./languageConfig";
import { PostProps } from "../../../globalContext/postsContext.d";
import { PostCreate } from "../../../globalContext/postsContext.d";
import { usePostList } from "../../../globalContext/postsContext.d";
import { FollowersUserNameProfileImageMolecule  } from "../../../components-global/username-pic-follow--molecule";

function PostPush( newPost:PostProps ) {
  const { postList, setPost } = usePostList();

  
  setPost([...postList, newPost ])
  return  (
    <div></div>
  )
};
/*

let numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

numeros.push(5, 6, 7);

console.log(numeros);

*/
let props: MainProps = {
  ariaLabelUpload: KitTranslate.ariaLabelUpload,
  ariaLabelTitle: KitTranslate.ariaLabelTitle,
  ariaLabelUploadContent: KitTranslate.ariaLabelUploadContent,
  moreButton: "...",
  publishButton: KitTranslate.publishButton,
  dragAndDropInfo: KitTranslate.recommendationInfo,
  recommendationInfo: KitTranslate.recommendationInfo,
};

export interface MainProps {
  readonly ariaLabelUpload?: string;
  readonly ariaLabelTitle?: string;
  readonly ariaLabelUploadContent?: string;
  readonly moreButton?: string;
  readonly publishButton?:string;
  readonly dragAndDropInfo?: string;
  readonly recommendationInfo?: string;
};

interface State {

};

interface PropsAny {

};

const initialValuePost /*:PostProps*/ = {
  key: "",
  postImageAlt: "",
  postImageURL:"",
  reactionsAcount: "",
  title: "",
  content: "",
  hasEdited: false
};



export class Main extends React.Component<MainProps> {
  state = {
    key: "fdfg",
    postImageAlt: "dfg",
    postImageURL: "dfg",
    reactionsAcount: "dfg",
    title: "dfg",
    content: "df",
    hasEdited: false
  };
 
  onChange( event: any ){
    const { name, value } = event.target;
    const obj = { [name]: value };
    console.log( obj )
  };

  onSubmit( event: any ) {
    event.preventDefault();
    
    const myPost = {
      key: "gksdjkrrfg",
      postImageAlt: "qualquer imagem",
      postImageURL: "",
      reactionsAcount: "55",
      title: "Meu post criado",
      content: "Meu conteudo perfeito",
      hasEdited: false
    };

  
 
  };

 


    




    /*
    axios.post('http://localhost:5000/promotions', values)
      .then((response) => {
        history.push('/');
      });*/


  render(): JSX.Element {
    return  (
    <div className="main">
      <div className="component-form">
        <form className="form">
          <div className="more-publish--btns">
            <button className="more-button" title={ props.moreButton } onClick={ () => {} }>...</button>
            <button type="submit" className="publish-button" title={ props.publishButton } onClick={ this.onSubmit }>{ props.publishButton }</button>
          </div>
          <div className="form-div">
          <div className="imputUpload-container">
            <input className="imputUpload" type="file" name="Image"  accept="image/png, image/jpeg, image/jpg"   aria-label={ props.ariaLabelUpload } multiple />
            
            <span>{ props.dragAndDropInfo }</span>
            <span>{ props.recommendationInfo }</span>
          </div>
          <div className="TitleContent">
            <FollowersUserNameProfileImageMolecule/>
            <div className="imputTitle-container">
             <input className="imputTitle" id="imputTitle" name="Title" type="text" aria-label={ props.ariaLabelTitle } placeholder={ props.ariaLabelTitle } onChange={ this.onChange } required/>
            </div>
            <div className="inputContent-container"><input className="inputContent" name="Content" type="text" aria-label={ props.ariaLabelUploadContent } placeholder={ props.ariaLabelUploadContent } onChange={ this.onChange }/></div>
            <div className="inputLink-container"><input className="inputContent" name="Content" type="text" aria-label={ props.ariaLabelUploadContent } placeholder={ props.ariaLabelUploadContent } onChange={ this.onChange }/></div>
          </div>
          </div>
        </form>
         <button className="more-button"  onClick={ this.onSubmit }>criar</button>
      </div>
    </div>
    )
  }
}

/*
alterar o objeto no front depois setar o objeto
requisitos de entrada
Personalizar o placeholder
personalizar o erro 
*/ 