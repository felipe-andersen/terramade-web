import React from "react";
import { StyledUserSettingsModal, StyledModalOptions } from "./styles"; 
import { ChevronIcon } from "../../../iconLibrary/chevronIcon";

interface UserSettingsModalProps {

};


export function UserSettingsModal():JSX.Element {
  return (
    <StyledUserSettingsModal>
      <ModalOptions/>
    </StyledUserSettingsModal>
  )
};


//-----------------------------------------------------------------------------


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
      <StyledModalOptions>
        <button className="backBtn">
          <div className="icon-title--Contanier">
            <div className="icon--Contanier"></div>{" icon"}
          </div>
          <div className="icon--Contanier backgroudColor"><ChevronIcon/></div>
        </button>
          

        <button className="personalizationBtn">
          <div className="icon-title--Contanier">
            <div className="icon--Contanier"></div>{"Personalizar"}
          </div>
          <div className="icon--Contanier backgroudColor"></div>
        </button>

        <button className="suportBtn">
          <div className="icon-title--Contanier">
            <div className="icon--Contanier"></div>
            {"Ajuda e Suporte"}
          </div>
          <div className="icon--Contanier backgroudColor"></div>
        </button>

        <button className="AcessibilidadeBtn">
          <div className="icon-title--Contanier">
            <div className="icon--Contanier"></div>{"Acessibilidade"}
          </div>
          <div className="icon--Contanier backgroudColor"></div>
        </button>

        <button className="exitBtn">
          <div className="icon-title--Contanier">
            <div className="icon--Contanier"></div>{"Sair"}
          </div>
          <div className="icon--Contanier backgroudColor"></div>
        </button>
        
      </StyledModalOptions>
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

