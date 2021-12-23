import * as React from "react";
import * as Router from "react-router-dom";
import { language } from "../../globalContext/language";

let fdf = language;

const emailPlaceholder = {
  help_enUS: "Insira seu email",
  help_ptBR: "Insira seu email",
  help_esES: "Insira seu email"
 };

const signInEmailInputLabelText = "Email";

const emailKeywordForgot =  {
  help_enUS:"Esqueceu email/senha",
  help_ptBR:"Esqueceu email/senha",
  help_esES:"Esqueceu email/senha"
};

const help = {
  help_enUS:"Help",
  help_ptBR:"Ajuda",
  help_esES:"Ayuda",
};

const singInDecorativeImgURL = "";

const TermsOfUsePolicyPrivacyURLTranslate= {
  TermsOfUse: "Termos de Uso",
  TermsOfUseURL: "",
  PolicyPrivacy: "Política de Privacidade",
  PolicyPrivacyURL: ""
  };
  
const formInfo = {
  formInfo_ptBR: `A entrar você concorda com os ${ TermsOfUsePolicyPrivacyURLTranslate.TermsOfUse } e ${ TermsOfUsePolicyPrivacyURLTranslate.PolicyPrivacy }.`,
  formInfo_enUS: `A entrar você concorda com os ${ <a href={ TermsOfUsePolicyPrivacyURLTranslate.TermsOfUse }>{ TermsOfUsePolicyPrivacyURLTranslate.TermsOfUse }</a>} e ${( <a href={ TermsOfUsePolicyPrivacyURLTranslate.PolicyPrivacyURL }>{ TermsOfUsePolicyPrivacyURLTranslate.PolicyPrivacy }</a>)}.`,
  formInfo_esES: `A entrar você concorda com os ${( <a href={ TermsOfUsePolicyPrivacyURLTranslate.TermsOfUse }>{ TermsOfUsePolicyPrivacyURLTranslate.TermsOfUse }</a>)} e ${( <a href={ TermsOfUsePolicyPrivacyURLTranslate.PolicyPrivacyURL }>{ TermsOfUsePolicyPrivacyURLTranslate.PolicyPrivacy }</a>)}.`
};

export const KitTranslate = {
  formInfo: formInfo,
  singInDecorativeImgURL: singInDecorativeImgURL,
  help: help,
  emailKeywordForgot: emailKeywordForgot,
  emailPlaceholder: emailPlaceholder,
  signInEmailInputLabelText: signInEmailInputLabelText
};