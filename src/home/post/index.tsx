
// Dependenses
import * as React from 'react';
import "./styles.css";

// import { userName, profileImageID, followersNumber } from "./languageOptions";

import { FollowersUserNameProfileImageMolecule } from "./../../componentsGlobal/molecules";


// Adapter
let Adapter = {};

export interface PostProps {
  postImageAlt: string,
  postImageURL: string,
  reactionsAcount: string,
  title: string,
  content: string,
};
interface PostState {
  postImageAlt: string,
  postImageURL: string,
  reactionsAcount: string,
  title: string,
  content: string,
};

const FollowersUserNameProfileImageMolecul = import("./../../componentsGlobal/molecules").then( molecule => molecule.FollowersUserNameProfileImageMolecule);

export class PostComponent extends React.Component<PostProps, PostState> {
  
  render():JSX.Element {
    return (
        <div className="post">
          <div className="postImg-Container">
            <a href="" className="postImg--link" ><img className="postImg" alt={ this.props.postImageAlt } src={this.props.postImageURL }/></a>
            <a className="btns-container">
              <div className="btns"><a href=""><svg></svg></a><a href=""><svg></svg></a><a href=""><svg></svg></a></div>
              <div className="btns"><a href=""><svg></svg></a><a href=""><svg></svg></a><a href=""><svg></svg></a></div>
            </a>
          </div>
          <div className="containerh">
            {/*<button onClick={ () => {} } className="optionsReticence">...</button>*/}
            <a href=""><h2 className="Title">{ this.props.title }</h2></a>
            <a href=""><p className="Content">{this.props.content }</p></a>
            <FollowersUserNameProfileImageMolecule/>
            <div className="reactions">
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{ this.props.reactionsAcount }</p>
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{ this.props.reactionsAcount }</p>
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{ this.props.reactionsAcount }</p>
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

