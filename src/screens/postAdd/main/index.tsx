import * as React from "react";
import "./styles.css";
import { KitTranslate } from "./languageConfig";
import { PostCreate } from "../../../globalContext/post";
import { usePostList } from "../../../globalContext/post";
import { FollowersUserNameProfileImageMolecule  } from "../../../componentLibrary/username-pic-follow--molecule";
import { ChevronIcon } from "../../../iconLibrary/chevronIcon";
import * as Router from "react-router-dom";




let props: MainProps = {
  ariaLabelUpload: KitTranslate.ariaLabelUpload,
  ariaLabelTitle: KitTranslate.ariaLabelTitle,
  ariaLabelUploadContent: KitTranslate.ariaLabelUploadContent,
  moreButton: "...",
  publishButton: KitTranslate.publishButton,
  dragAndDropInfo: KitTranslate.dragAndDropInfo,
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

let link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU";

export function Main():JSX.Element {

const initialValuePost = {
key: "My key",
postImageAlt: "post image ",
postImageURL: "www.terramadeproject.com",
reactionsAcount: "10",
title: "Post title ",
content: "My fist content",
hasEdited: false
};


const [myPost, setMyPost] = React.useState(initialValuePost)

  function onChange( event: any ){
    const { name, value } = event.target;
    const obj = { [name]: value };
    if(event.target.getAttribute("name") == "Title"){
      setMyPost( {...myPost,
    
        title: value,

      })
    }
  };

  function create(){
    const post = new PostCreate( {
      key: "gksdjkrrfg",
      postImageAlt: "qualquer imagem",
      postImageURL: "",
      reactionsAcount: "55",
      title: "Meu post criado",
      content: "Meu conteudo perfeito",
      hasEdited: false
    })
  };

  const { postList, setPost } = usePostList();

  function OnSubmit( event: any ) {
    event.preventDefault();
    console.log("Submited ...")

 
    console.log("Saved !!!");

    postList.map(post => {
      console.log(post.title)
  
    })
  };

  return  (
    <div className="main">
      <div className="component-form">
        <form className="form">
       
          <div className="uploads-publish--group">
            <div className="uploadCards">
            <div key={1} className="pic--container">
              <img className="postImgUploaded" id="postImgUploaded" src={ link }/>
              <input id="discardImage" type="button" onClick={ () => {} }/>
            </div>

            <label className="stylizedLblIptDiscardImg" htmlFor="discardImage">
              <ChevronIcon/>
            </label>

            <div key={2} className="pic--container">
              <img className="postImgUploaded" id="postImgUploaded" src={ link }/>
              <input id="discardImage" type="button" onClick={ () => {} }/>
            </div>

            <label className="stylizedLblIptDiscardImg" htmlFor="discardImage">
              <ChevronIcon/>
            </label>
            </div>
            {/*
            <button className="more-button" title={ props.moreButton } onClick={ () => {} }>...</button>
            <button type="submit" className="publish-button" title={ props.publishButton } onClick={ this.onSubmit }>{ props.publishButton }</button>
            */}
            <div className="imputUpload-container">
              <label className="inputLabelStyleImg" htmlFor="imputUpload" ></label>
              <input className="imputUpload" id="imputUpload" type="file" name="Image"  accept="image/png, image/jpeg, image/jpg"   aria-label={ props.ariaLabelUpload } multiple />
              <span className="dragAndDropInfo">{ props.dragAndDropInfo }</span>
              {/*<span className="recommendationInfo">{ props.recommendationInfo }</span>*/}
            </div>
            <button className="publicPost"  onClick={ OnSubmit }>Publicar</button>
          </div>
          <div className="line"></div>
          <div className="form-div">
           
            <div className="TitleContent">
        
              <div className="imputTitle-container">
                <input className="imputTitle" id="imputTitle" name="Title" type="text" aria-label={ props.ariaLabelTitle } placeholder={ props.ariaLabelTitle } onChange={ onChange } required/>
              </div>
              <div className="inputContent-container"><textarea className="inputContent" name="Content" aria-label={ props.ariaLabelUploadContent } placeholder={ props.ariaLabelUploadContent } onChange={ onChange }  rows={5} cols={33}/></div>
              <div className="inputLink-container"><input className="inputContent" name="Content" type="text" aria-label={ props.ariaLabelUploadContent } placeholder={ props.ariaLabelUploadContent } onChange={ onChange}/></div>
            </div>
          </div>
          <div className="btnsPost-container">
            <label htmlFor="">foto/video</label><input type="image"/>
            <label htmlFor="">emojis</label><input type="image"/>
            <label htmlFor="">Check-in/label</label><input type="image"/>
            <label htmlFor="">Check-in/label</label><input type="image"/>
          </div>
        </form>
   
  


      </div>
    </div>
  )
}

/*
alterar o objeto no front depois setar o objeto
requisitos de entrada
Personalizar o placeholder
personalizar o erro 
*/ 

