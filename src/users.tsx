import React from "react";

interface UserProps {
  post: object;
  config: object;
  followersNumber: string;
  userName: string;
  profileImageID: string;
  language: string;
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
    super(state)
    this.userName = state.userName;
    this.config = state.config
    this.followersNumber = state.followersNumber;
    this.profileImageID = state.profileImageID;
    this.language = state.language;
    this.post = state.post;
    this.date = new Date
  };

  getUser( state:UserState ){
    this.setState(
      state = {
        post: {},
        config: {},
        followersNumber: "",
        userName: "",
        profileImageID: "",
        language: ""
      }
    )
  };

  setUser(){

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
