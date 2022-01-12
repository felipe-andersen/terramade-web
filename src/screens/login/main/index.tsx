import * as React from "react";
import * as Router from "react-router-dom";
import { VisibilityEyeIcon } from "../../../iconLibrary/visibity-eye";
import { InfoIcon } from "../../../iconLibrary/info";
import { KitTranslate } from "../languageConfig";
import { StyledMainComponent } from "./styles";
import { VisibilityEyeOffIcon } from "../../../iconLibrary/visibilityOff-eye";
import { ClearCloseIcon } from "../../../iconLibrary/clear-close";
import { CheckIcon } from "../../../iconLibrary/check";
import { GoogleIcon } from "../../../iconLibrary/Google";
import { EastIcon } from "../../../iconLibrary/east";

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
          <div className="signInLogIn--container">
            <div className="logo--container">
              <p className="logo">W</p>
              </div>
              <h1>Bem vindo ao Wemade! <br/>Entre com sua conta.</h1>
            <div className="alert--container red">
              <p>{"Digite um email válido"}</p>
              <InfoIcon/>
            </div>
            <div className="form-socialAuht--container">

            <form className="signInLogIn" >
              <label htmlFor="inputEmail">
                <div className="label-EmailValidateInfo--container" >
                  <span className="emailLabel">{"Email"}</span>
                  <span className="invalidEmail">{"inválido"}<CheckIcon/></span>
                </div>
                <div className="inputEmail--container">
                  <input type="email" id="inputEmail" className="inputEmail" placeholder={ adapter.emailPlaceholder } aria-label={ adapter.SignInEmailInputLabelText } />
                  <label  htmlFor="emailResetInput" className="emailResetInputLabel">
                    <input type="reset" className="emailResetInput" id="emailResetInput" title=""/>
                    <ClearCloseIcon/>
                  </label>
                </div>
              </label>
              <label htmlFor="inputPassword">
                <div className="label-passWordValidateInfo--container" >
                  <span>{"Senha"}</span>
                  <span className="checkout"><p>{"senha inválida"}</p><CheckIcon/></span>
                </div>
                <div className="inputPassword--container">
                  <input type="password" className="" id="inputPassword" placeholder={ adapter.emailPlaceholder } aria-label={ adapter.SignInEmailInputLabelText } />
                  <label  htmlFor="passwordResetInput" className="passwordResetInputLabel">
                    <input type="reset" className="" id="passwordResetInput" title=""/>
                    <ClearCloseIcon/>
                  </label>
                  <div className="VisibilityEyeIcon--container">
                    <VisibilityEyeIcon/>
                  </div>
                  <div className="VisibilityEyeOffIcon--container">
                    <VisibilityEyeOffIcon/>
                  </div>
                </div>
              </label>
              <p className="emailKeywordForgot">{ adapter.emailKeywordForgot }</p>
              <div className="submitInput--Label"><p>{"Entrar"}</p><div className="eastIcon--container"><EastIcon/></div></div>
              <input type="submit" className="submitInput" id="submitInput" />
              <div className="captcha">
                <input type="checkbox" className="" id=""/>
                Captcha
              </div>
            </form>
            <div className="socialAuth--container">
          
              <button className="socialAuthBtn">
                <div className="GoogleIcon--container"><GoogleIcon/></div>
                {"Iniciar sessão com Google"}
              </button>
            
              <button className="socialAuthBtn">{"Iniciar sessão com Facebook"}</button>
    
              <button className="socialAuthBtn">{"Faxer login com a Aplle"}</button>
            </div>

            </div>
            <div className="formInfo">
              <a href="">{ adapter.formInfo }</a>
              <a href="">{ "Criar conta" }</a>
              
            </div>
            <a className="help-suport" href="">{ adapter.help }</a>
            <span className="line" ></span>
          </div>
          <div className="">
            <img src={ adapter.singInDecorativeImgURL } className=""/>
          </div>
        </StyledMainComponent>
    )
  }
}

