
// Dependenses
import * as React from 'react';
import "./styles.css";
import * as Router from "react-router-dom";

// import { userName, profileImageID, followersNumber } from "./languageOptions";


import { FollowersUserNameProfileImageMolecule } from "../../../componentLibrary/username-pic-follow--molecule";

// Adapter
let Adapter = {};

export interface PostProps {
  key: string;
  postImageAlt: string,
  postImageURL: string,
  reactionsAcount: string,
  title: string,
  content: string,
  hasEdited: boolean

  userName: string;
  profileImageID: string;
  followersAcount: number;
  state: string;
  city: string;
};


/*
interface PostState {
  key: string;
  postImageAlt: string,
  postImageURL: string,
  reactionsAcount: string,
  title: string,
  content: string,
  hasEdited: boolean,
};
*/
const FollowersUserNameProfileImageMolecul = import("../../../componentLibrary/molecules").then( molecule => molecule.FollowersUserNameProfileImageMolecule);

export class PostComponent extends React.Component<PostProps> {

  state = {
    postImageAlt: this.props.postImageAlt,
    postImageURL: this.props.postImageURL,
    reactionsAcount: this.props.reactionsAcount,
    title: this.props.title,
    content: this.props.content,
    key: this.props.key,
    hasEdited: this.props.hasEdited,

    userName: this.props.userName,
    profileImageID: this.props.profileImageID,
    followersAcount: this.props.followersAcount,
    state: this.props.state,
    city: this.props.city
  };

  public render():JSX.Element {
    return (
        <div className="post-q">
          <div className="postImg-Container">
            <Router.Link to="/nome-do-post" className="postImg--link" ><img className="postImg" alt={ this.props.postImageAlt } src={this.props.postImageURL }/></Router.Link>
            <a className="btns-container">
              <div className="btns"><a href=""><svg></svg></a><a href=""><svg></svg></a><a href=""><svg></svg></a></div>
              <div className="btns"><a href=""><svg></svg></a><a href=""><svg></svg></a><a href=""><svg></svg></a></div>
            </a>
          </div>
          <div className="containerh">
           <p>{ this.props.hasEdited }</p>
            <a href=""><h2 className="Title">{ this.props.title }</h2></a>
            <a href=""><p className="Content">{this.props.content }</p></a>
            <FollowersUserNameProfileImageMolecule
        
              userName="Ricardo Albuquerque"
              profileImageID="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"
              followersAcount={65}
              
            
            />
            <div className="reactions">
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{ this.props.reactionsAcount }</p>
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{ this.props.reactionsAcount }</p>
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{ this.props.reactionsAcount }</p>
              <button className="handleView" onClick={ () => {} }><svg></svg></button>
            </div>
          </div>
        </div>
    )
  };

  optionsReticenceModal() {
    return (
      <>
      
      </>
    )
  }
};

