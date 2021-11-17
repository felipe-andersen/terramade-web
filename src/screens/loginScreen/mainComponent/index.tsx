import * as React from "react";
import * as Router from "react-router-dom";
import {fefeli } from "../languageConfig";

let lixo = fefeli;

let ctx = {
  TermsOfUse: "Termos de Uso",
  TermsOfUseURL: "",
  PolicyPrivacy: "Pplítica de Privacidade",
  PolicyPrivacyURL: ""
};

let formInfo = `A entrar você concorda com os ${( <a href={ ctx.TermsOfUse }>{ ctx.TermsOfUse }</a>)} e ${( <a href={ ctx.PolicyPrivacyURL }>{ ctx.PolicyPrivacy }</a>)}.`

let adapter:SignScreenProps = {
  emailPlaceholder: "Insira seu email",
  SignInEmailInputLabelText: "Email",
  emailKeywordForgot: "Esqueceu email/senha",
  help: "Ajuda",
  formInfo: formInfo,
  decorationImgSingIn: ""
};

interface SignScreenProps {
  emailPlaceholder: string;
  SignInEmailInputLabelText: string;
  emailKeywordForgot: string;
  help: string;
  formInfo: string;
  decorationImgSingIn: string;
};


export class MainComponent extends React.Component<SignScreenProps>{
  public render(): JSX.Element {
    return (
        <div className="MainComponent">
          <div className="">
            <form className="signInLogIn" >
              <input type="email" id="" placeholder={ adapter.emailPlaceholder } aria-label={ adapter.SignInEmailInputLabelText } />
              <input type="password" className="" id="" placeholder={ adapter.emailPlaceholder } aria-label={ adapter.SignInEmailInputLabelText } />
              <p>{ adapter.emailKeywordForgot }</p>
            </form>
            <div className="socialAuth"></div>
            <p>{ adapter.formInfo }</p>
            <p>{ adapter.help }</p>
          </div>
          <div className="">
            <img src={ adapter.decorationImgSingIn } className=""/>
          </div>
        </div>
    )
  }
}

