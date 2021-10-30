import React from "react";
import "./styles.css";
import { FollowersUserNameProfileImageMolecule } from "../../../componentsGlobal/molecules"

let props: Props = {
  ariaLabelUpload: "Carregue um arquivo de imagem",
  ariaLabelTitle: "Adicione um título",
  ariaLabelUploadContent: "Adicione uma descrição",
  moreButton: "...",
  publishButton: "Publish",
  dragAndDropInfo: "Araste e solte ou clique para carregar",
  recommendationInfo: "Recomendação: use arquivos .jpg de alta qualidade com menos de 20MB",
};

interface Props {
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

// A App precisa verificar se o usuário está conectada à internet


export class Main extends React.Component<Props, State, PropsAny> {
  render(): JSX.Element {
    return  (
    <div className="main">
      <div className="component-form">
        <div className="more-publish--btns">
          <button className="more-button" title={ props.moreButton } onClick={ () => {} }>...</button>
          <button className="publish-button" title={ props.publishButton } onClick={ () => {} }>{ props.publishButton }</button>
        </div>
        <div className="post-form">
          <div className="imputUpload-container">
            <input className="imputUpload" type="file" name="Image"  accept="image/png, image/jpeg, image/jpg"   aria-label={ props.ariaLabelUpload } multiple />
            <svg></svg>
            <span>{ props.dragAndDropInfo }</span>
            <span> { props.recommendationInfo }</span>
          </div>
          <div className="TitleContent">
            <FollowersUserNameProfileImageMolecule/>
            <div className="imputTitle-container">
             <input className="imputTitle" name="Title" type="text" aria-label={ props.ariaLabelTitle } placeholder="Add a title"/>
            </div>
            <div className="inputContent-container"><input className="inputContent" name="Content" type="text" aria-label={ props.ariaLabelUploadContent } placeholder="Add a description"/></div>
            <div className="inputContent-container"><input className="inputContent" name="Content" type="text" aria-label={ props.ariaLabelUploadContent } placeholder="Adicione um link de destino"/></div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}