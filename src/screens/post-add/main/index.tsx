import * as React from "react";
import "./styles.css";
import { FollowersUserNameProfileImageMolecule } from "../../../componentsGlobal/molecules"
import { KitTranslate } from "./languageConfig";
import { PostProps } from "../../../global/postsContext.d";


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

const initialValuePost:PostProps = {
    postImageAlt: "",
    postImageURL:"",
    reactionsAcount: "",
    title: "",
    content: "",
};

export class Main extends React.Component<MainProps> {
  state = {
   title:"",
   content:"",
   linkURL:""
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
      </div>
    </div>
    )
  }
}

