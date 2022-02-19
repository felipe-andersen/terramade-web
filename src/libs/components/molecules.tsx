import * as React from "react";
import "./styles.css";


interface context {
  languageSelected : string;
  userName: string;
  userNameProfilePicture: () => string | undefined;
  profileImageID: string;
  followersNumber: string
};

let Context: context = {
  languageSelected: "",
  userName: "Ricardo do Valle",
  userNameProfilePicture: _userNameProfilePicture,
  profileImageID: "https://www.2net.com.br//Repositorio/251/Publicacoes/23883/3c2fd25f-c.jpg",
  followersNumber: "65"
};


// Translate followers
function followersAcount() {
  return "35"
};

function followers() {
  let followers_translate: string;

  if ( Context.languageSelected === "enUSA" ) {
    followers_translate = " followers"
  } 
  else if ( Context.languageSelected === "enEN" ) {
    followers_translate = " seguidores";
  } 
  else if ( Context.languageSelected === "ptBR" ) {
    followers_translate = " seguidores";
  }
};

let userName = "Ricardo Albuquerque";
let followersNumber = followersAcount() + followers();
let userNameProfilePicture = _userNameProfilePicture
let profileImageID = "567864589745";

// Translate alt
function _userNameProfilePicture() {
  let username = userName

  if ( Context.languageSelected === "enUSA" ) {
    let userNameProfilePicture_translate = `Foto ou imagem de perfil de ${ userName }`;
    return userNameProfilePicture_translate
  } 
  else if ( Context.languageSelected === "enEN" ) {
    let userNameProfilePicture_translate =  `Foto ou imagem de perfil de ${ userName }`;
    return userNameProfilePicture_translate
  } 
  else if ( Context.languageSelected === "ptBR" ) {
    let userNameProfilePicture_translate = `Foto ou imagem de perfil de ${ userName }`;
    return userNameProfilePicture_translate
  }
};

// adapter
let props: FollowersUserNameProfileImageProps = {
  userName: Context.userName,
  profileImageID: Context.profileImageID,
  followersNumber: Context.followersNumber,
  cityState: "RIO DE JANEIRO RJ",
  //alt: Context.userNameProfilePicture // translation from: userName profile picture
};

interface FollowersUserNameProfileImageProps {
  readonly userName?: string;
  readonly profileImageID?: string;
  readonly followersNumber?: string;
  readonly cityState?: string;
  //readonly alt?: () => string | undefined
};




export class FollowersUserNameProfileImageMolecule extends React.Component<FollowersUserNameProfileImageProps> {

  public render():JSX.Element {
    return (
      <div className="followers-userName-profileImage--molecule" itemScope /*itemtype == itemType(React)*/ itemType="https://schema.org/Person" >
        <a href="" className="profileImage-link"><img alt="" className="profileImage" src={ props.profileImageID } itemProp="image"></img></a>
        <div className="container-usernameFollowers">
          <a href="" className="userName" itemProp="name">{ props.userName }</a>
          <a href="" className="followers">{ props.followersNumber }</a>
        
        </div>
      </div>
    )
  }
};

























/*
interface ExempleMoleculeProps {
  userName : string;
};

interface ExempleMoleculeState {
  userName? : string;
};

interface ExempleMoleculePropsAny{
  userName?: string;
};

class MoleculeExemple<ExempleMoleculeProps, ExempleMoleculeState, ExempleMoleculePropsAny> {

  render( {}: ExempleMoleculeProps, {}: ExempleMoleculeState, {}: ExempleMoleculePropsAny ): JSX.Element {
    return (
      <div className="MoleculeExemple--molecule">
        <a className="userName">{ userName }</a>
      </div>
    )
  }
};
*/