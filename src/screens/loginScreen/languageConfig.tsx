import * as React from "react";

import * as Router from "react-router-dom";
import { HeaderComponent } from "../home/header";

let fdfd = HeaderComponent;
export let fefeli = "fdfd"
export  let ctx = {
    TermsOfUse: "Termos de Uso",
    TermsOfUseURL: "",
    PolicyPrivacy: "Pplítica de Privacidade",
    PolicyPrivacyURL: ""
  };
  
let formInfo = `A entrar você concorda com os ${( <a href={ ctx.TermsOfUse }>{ ctx.TermsOfUse }</a>)} e ${( <a href={ ctx.PolicyPrivacyURL }>{ ctx.PolicyPrivacy }</a>)}.`
  

let fdf = <HeaderComponent/>