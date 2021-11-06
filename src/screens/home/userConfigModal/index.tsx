import React from "react";




interface ConfigModalProps {
  personalization: string;
  aelpSuport: string;
  acessibility: string;

  idiom: string;
  lightMode: string;
  darkMode: string;

  fontSizeAdjust: string;
  keyboard: string;
};

export class ModalOptions extends React.Component {
  // modais que renderizam com animação e chamadas montagem e desmontagem
  render() {
    return (
      <div className="modal">
        <div className="">{" icon"}</div>
        <div className="">{"icon Personalização icon"}</div>
        <div className="">{"Ajuda e Suporte"}</div>
        <div className="">{"Acessibilidade"}</div>
        <div className="">{"Sair"}</div>
        
      </div>
    )
  }
};

export class Personalization extends React.Component {
  render() {
    return (
      <div className="modal">
        <button title="" className="">{" icon"}</button>
        <button className="">{"Idioma"}</button>
        <button className="">{"Modo Escuro on/off"}</button>
        <button className="">{"Modo Claro"}</button>
        
      </div>
    )
  }
};

export class HelpSuport extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="">{" icon"}</div>
        <div className="">{"Idioma"}</div>
        <div className="">{"Mode dark on/off"}</div>
        <div className="">{"Mode light"}</div>
        
      </div>
    )
  }
};

export class Acessibility extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="">{"font size"}</div>
        <div className="">{"Keyboard"}</div>
        
      </div>
    )
  }
};

