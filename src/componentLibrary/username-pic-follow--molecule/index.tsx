import * as React from "react";
import "./styles.css";
import { followersSelectedLanguage } from "./languageConfig";

interface context {
  userName: string;
  userNameProfilePicture: string ;
  profileImageID: string;
  followersNumber: string
};

let Context: context = {
  userName: "Ricardo do Valle",
  userNameProfilePicture: "",
  profileImageID: "https://www.2net.com.br//Repositorio/251/Publicacoes/23883/3c2fd25f-c.jpg",
  followersNumber: "65"
};





/*


let props: FollowersUserNameProfileImageProps = {
  userName: Context.userName,
  profileImageID: Context.profileImageID,
  followersNumber: Context.followersNumber,
  cityState: "Rio de janeiro, RJ"

};
*/
let adapter:LanguageOptions = {
  followers: followersSelectedLanguage,
};

interface FollowersUserNameProfileImageProps {
  userName?: string;
  profileImageID?: string;
  followersAcount?: number;
  state?: string;
  city?: string;
};

interface LanguageOptions {
  followers: string;
};

export class FollowersUserNameProfileImageMolecule extends React.Component<FollowersUserNameProfileImageProps> {
 
  render():JSX.Element {
    return (
      <div id="followers-userName-profileImage--container" className="followers-userName-profileImage--molecule">
        <a href="" className="profileImageID">
          <img alt="" className="profileImage" src={ this.props.profileImageID }></img>
        </a>

        <div className="usernameFollowers--container">
          <a href="" className="userName">{ this.props.userName }</a>
          <a href="" className="followers">{ this.props.followersAcount } { adapter.followers }</a>
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