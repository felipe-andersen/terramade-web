import React from "react";

interface UserProps {
  post?: object;
  config?: object;
  followersNumber?: string;
  userName?: string;
  profileImageID?: string;
  language?: string;
  date?: Date
}; 

interface UserProps {
  post?: object;
  config?: object;
  followersNumber?: string;
  userName?: string;
  profileImageID?: string;
  language?: string;
  date?: Date
}; 

interface UserState {
  post: object;
  config: object;
  followersNumber: string;
  userName: string;
  profileImageID: string;
  language: string;
};

// Sempre transmitir objetos, nada de dados soltos
// Componente de classe do React: React.Component<p = {}, s = {}, ss = any> 
 class User extends React.Component<UserProps, UserState> {
  post
  followersNumber
  userName
  profileImageID
  language
  date
  config

  constructor( state:UserState ) {
    super( state )
      this.userName = this.state.userName;
      this.config = this.state.config
      this.followersNumber = this.state.followersNumber;
      this.profileImageID = this.state.profileImageID;
      this.language = this.state.language;
      this.post = this.state.post;
      this.date = new Date
    };

  setUser( state:UserState ){
    this.setState(
      state = {
        post: state.post,
        config: state.config,
        followersNumber: state.followersNumber,
        userName: state.userName,
        profileImageID: state.profileImageID,
        language: state.language
      }
    )
  };

  getUser(){

  };

  delUser(){
    
  };
};

/*
export let user = new User({
  followersNumber: "felipe",
  post: {}, 
  config: {}, 
  userName: "felipe", 
  profileImageID:"vdvd",
  language:""
});
*/

//___________________________________________________________________________________

interface CreatePostProps {
  title: string;
  content: string;
  postImageAlt: string;
  postImageId: string;
  reactionsAcount: string;
  reactionAcount1: string;
  reactionAcount2: string;
  reactionAcount3: string;
  reactionAcount4: string;
  reactionAcount5: string;
  date: Date

}; 

interface CreatePostState {
  title: string;
  content: string;
  postImageAlt: string;
  postImageId: string;
  reactionsAcount: string;
  reactionAcount1: string;
  reactionAcount2: string;
  reactionAcount3: string;
  reactionAcount4: string;
  reactionAcount5: string;
};

class CreatePost extends React.Component<CreatePostProps, CreatePostState> {

  constructor( props:CreatePostProps, state:CreatePostState ) {
    super( props )
    props.date = new Date;
    props.title = state.title;
    props.content = state.content;
    props.postImageId = state.postImageId;
  };

  getUser(){

  };

  setUser(){

  };

  delUser(){
    
  };
};
