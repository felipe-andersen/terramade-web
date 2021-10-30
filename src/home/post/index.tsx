
// Dependenses
import * as React from 'react';
import "./styles.css";
// import { User } from "./users";
// import { userName, profileImageID, followersNumber } from "./languageOptions";

import { FollowersUserNameProfileImageMolecule } from "./../../componentsGlobal/molecules";


// Adapter
let Adapter = {};

export interface PostComponentProps {
  post : { postImageAlt: string,
  postImageURL: string,
  reactionsAcount: string,
  title: string,
  content: string, }
};

export interface PostProps {
  postImageAlt: string,
  postImageURL: string,
  reactionsAcount: string,
  title: string,
  content: string,
};

const FollowersUserNameProfileImageMolecul = import("./../../componentsGlobal/molecules").then( molecule => molecule.FollowersUserNameProfileImageMolecule);

export class PostComponent extends React.Component<PostComponentProps> {
  post;

  constructor( props:PostComponentProps ) {
    super( props )
    this.post = { 
      postImageAlt: "gf",
      postImageURL: "string",
      reactionsAcount: "string",
      title: "string",
      content: "string",
      };
      // this.state = this.post;
     
      this.state = { 
      postImageAlt: "gf",
      postImageURL: "string",
      reactionsAcount: "string",
      title: "string",
      content: "string",
      };
        
  };

  componentDidMount(){}
  componentWillUnmount(){}
  componentDidUpdate(){}

  render():JSX.Element {
    return (
        <div className="post">
          <div className="postImg-Container">
            <a href="" className="postImg--link" ><img className="postImg" alt={ this.post.postImageAlt } src={this.post.postImageURL }/></a>
            <a className="btns-container">
              <div className="btns"><a href=""><svg></svg></a><a href=""><svg></svg></a><a href=""><svg></svg></a></div>
              <div className="btns"><a href=""><svg></svg></a><a href=""><svg></svg></a><a href=""><svg></svg></a></div>
            </a>
          </div>
          <div className="containerh">
            {/*<button onClick={ () => {} } className="optionsReticence">...</button>*/}
            <a href=""><h2 className="Title">{ this.post.title }</h2></a>
            <a href=""><p className="Content">{this.post.content }</p></a>
            <FollowersUserNameProfileImageMolecule/>
            <div className="reactions">
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{ this.post.reactionsAcount }</p>
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{  this.post.reactionsAcount }</p>
              <button className="reaction" onClick={ () => {} }><svg></svg></button><p className="reactionsAcount">{ this.post.reactionsAcount }</p>
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
/*
let DataUser = {
  post: {},
  config: {},
  followersNumber: "65",
  userName: "Felipe",
  profileImageID:"dyhjhj",
  language:"ptBR"
};

let user = new User( DataUser )

console.log( user )
*/




/*

createInterface;
 React.createFactory
 
*/

