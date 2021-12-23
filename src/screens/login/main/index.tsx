import * as React from "react";
import * as Router from "react-router-dom";
import { KitTranslate } from "../languageConfig";
import { StyledMainComponent } from "./styles";

let adapter:SignScreenProps = {
  emailPlaceholder: KitTranslate.emailPlaceholder.help_ptBR,
  SignInEmailInputLabelText: KitTranslate.singInDecorativeImgURL,
  emailKeywordForgot: KitTranslate.emailKeywordForgot.help_ptBR,
  help: KitTranslate.help.help_ptBR,
  formInfo: KitTranslate.formInfo.formInfo_ptBR,
  singInDecorativeImgURL: KitTranslate.singInDecorativeImgURL
};

interface SignScreenProps {
  readonly emailPlaceholder?: string;
  readonly SignInEmailInputLabelText?: string;
  readonly emailKeywordForgot?: string;
  readonly help?: string;
  readonly formInfo?: string;
  readonly singInDecorativeImgURL?: string;
};


export class MainComponent extends React.Component<SignScreenProps>{
  public render(): JSX.Element {
    return (
        <StyledMainComponent>
          <div className="form--container">
            <form className="signInLogIn" >
              <div className="alert--container">{"Digite um email válido"}</div>
              <label htmlFor="inputEmail">
                <div className="label-EmailValidateInfo--container" >
                  <span>{"Email"}</span>
                  <span>{"email inválido"}</span>
                </div>
                <div className="inputEmail--container">
                  <input type="email" id="inputEmail" className="inputEmail" placeholder={ adapter.emailPlaceholder } aria-label={ adapter.SignInEmailInputLabelText } />
                </div>
              </label>
              <label htmlFor="inputPassword">
                <div className="label-senhaValidateInfo--container" >
                  <span>{"Senha"}</span>
                  <span>{"senha inválida"}</span>
                </div>
                <div className="inputPassword--container">
                  <input type="password" className="" id="inputPassword" placeholder={ adapter.emailPlaceholder } aria-label={ adapter.SignInEmailInputLabelText } />
                </div>
              </label>
              <p className="emailKeywordForgot">{ adapter.emailKeywordForgot }</p>
              <label htmlFor="inputSubmit" className="inputSubmitFor">
              <input type="submit" className="inputSubmit" id="inputSubmit" />
              </label>  
              <div className="formInfo">
                <p>{ adapter.formInfo }</p>
                <p>{ "Criar conta" }</p>
                <p>{ adapter.help }</p>
      
              </div>
            </form>
          
            <div className="socialAuth--container">
            
            </div>
          </div>
         
          <div className="">
            <img src={ adapter.singInDecorativeImgURL } className=""/>
          </div>
        </StyledMainComponent>
    )
  }
}

