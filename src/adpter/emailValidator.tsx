import * as React from "react";

import * as EmailValidator from 'email-validator';

interface EmailValidatorProtocol {
  EmailVerify : boolean | undefined
  email: string 
};

function emailValidator( email: string ) {
  const EmailVerify = EmailValidator.validate( email )
  if ( EmailVerify === true) { 
    console.log( "Email validado" )
    return EmailVerify
  }
  else if ( EmailVerify === false ) {
    console.log( "Não foi possível validar email. Talvez seja... email inexistente; erro de digitação; email não suportado." )
    return EmailVerify
  }
  else if ( EmailVerify === undefined ) {
    console.log( "Não foi possível validar email. Talvez seja... email inexistente; erro de digitação; email não suportado." )
    return EmailVerify
  }
}; 

function emailCatch( email: string ) {
  const isEmail =  emailValidator( email )
  console.log( "Validando email..." )
  return isEmail
};


function emailValidatorProxy() {
  const [validator, setValidator] = React.useState();
};



function Jj () {};