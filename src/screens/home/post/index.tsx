
// Dependenses
import * as React from 'react';
import "./styles.css";
import * as Router from "react-router-dom";

// import { userName, profileImageID, followersNumber } from "./languageOptions";

import { FollowersUserNameProfileImageMolecule } from "../../../components-global/molecules";


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
};

interface PostState {
  key: string;
  postImageAlt: string,
  postImageURL: string,
  reactionsAcount: string,
  title: string,
  content: string,
  hasEdited: boolean,
};

const FollowersUserNameProfileImageMolecul = import("../../../components-global/molecules").then( molecule => molecule.FollowersUserNameProfileImageMolecule);

export class PostComponent extends React.Component<PostProps> {
  state={
    postImageAlt: this.props.postImageAlt,
    postImageURL: this.props.postImageURL,
    reactionsAcount: this.props.reactionsAcount,
    title: this.props.title,
    content: this.props.content,
    key: this.props.key,
    hasEdited: this.props.hasEdited
  };

  render():JSX.Element {
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
            <FollowersUserNameProfileImageMolecule/>
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

