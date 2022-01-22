import * as React from 'react';
import * as Router from "react-router-dom";
import { StyledPostComponent } from "./styles"

// import { userName, profileImageID, followersNumber } from "./languageOptions";

import { FollowersUserNameProfileImageMolecule } from "../../../componentLibrary/username-pic-follow--molecule";
import { PhotoCollectionsIcon } from '../../../iconLibrary/photoCollections';
import { MoreIcon } from '../../../iconLibrary/moreIcon';
import { ShareIcon } from '../../../iconLibrary/share';
import { BaloonIcon } from '../../../iconLibrary/baloon';

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
        <StyledPostComponent>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <div className="postImg--container">
            <img className="postImg" alt={ this.props.postImageAlt } src={ this.props.postImageURL }/>
            
            <Router.Link to="/nome-do-post" className="mask--container">
              <div className='imgAcount-constructionDiaryAcount--container'>
                <div className="imgAcount-container">
                  <div className="PhotoCollectionsIcon--container"><PhotoCollectionsIcon/></div>
                  <p className="imgAcount">{"5"}</p>
                </div>
                <div className="constructionDiaryAcount--container" style={{display: "none"}}>
                  <div className="constructionDiaryAcountIcon--container"></div>
                  <p>
                    <span className="constructionDiaryAcount text">{"dia"}</span><br></br>
                    <span className="constructionDiaryAcount count">{"100"}</span>
                  </p>
                </div>   
              </div>
              <div className="postBtn">
                <button className="shareBtn">
                  <div className="shareIcon--container"><ShareIcon/></div>
                </button>
                <button className="moreBtn">
                  <div className="moreIcon--container"><MoreIcon/></div>
                </button>
                <button className="moreBtn" style={{display: "none"}}>
                  <div className="moreIcon--container">S.local</div>
                </button>
                <button className="moreBtn" style={{display: "none"}}>
                  <div className="moreIcon--container">Contr</div>
                </button>
                <div className='baloon animate__animated animate__bounce'><BaloonIcon/></div>
              </div>
            </Router.Link>
          
         
           
            {/* 
            <a className="btns-container">
              <div className="btns">
                <a href=""><svg></svg></a>
                <a href=""><svg></svg></a>
                <a href=""><svg></svg></a>
              </div>
              <div className="btns">
                <a href=""><svg></svg></a>
                <a href=""><svg></svg></a>
                <a href=""><svg></svg></a>
              </div>
            </a>
            */}
          </div>
         
          <div className="writenContentGroup">
            <a className="">
              <h2 className="postTitle">{ this.props.title }</h2>
              <p className="postContent">{ this.props.content }</p>
            </a>
            <FollowersUserNameProfileImageMolecule
              userName="Ricardo Albuquerque"
              profileImageID="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"
              followersAcount={65}
            />
            
            
            <div className=" reactionBtns">
              <button className="reaction" onClick={ () => {} }><svg></svg></button>
             
              <button className="reaction" onClick={ () => {} }><svg></svg></button>
             
              <button className="reaction" onClick={ () => {} }><svg></svg></button>
           
              {/*<button className="handleView" onClick={ () => {} }><svg></svg></button>*/}
              <p style={{color:"rgba(60,60,60)"}}>1,7k</p>
            </div>
              
          </div>
         
        </StyledPostComponent>
    )
  };

  optionsReticenceModal() {
    return (
      <>
      
      </>
    )
  }
};

