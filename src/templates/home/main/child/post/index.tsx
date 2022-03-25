import * as React from 'react';
import * as Router from "react-router-dom";
import { StyledPostComponent } from "./styles"
import { FollowersUserNameProfileImageMolecule } from "../../../../../libs/components/username-pic-follow--molecule";
import { PhotoCollectionsIcon } from '../../../../../libs/icons/photoCollections';
import { MoreIcon } from '../../../../../libs/icons/moreIcon';
import { ShareIcon } from '../../../../../libs/icons/share';
import { BaloonIcon } from '../../../../../libs/icons/baloon';
import { JsxFlags } from 'typescript';
import { PostProtocol } from '../../../../../assets/dataSet/posts';



export interface PostComponentProtocol {
  data: PostComponentPropsProtocol
};

interface PostComponentPropsProtocol {
  post: PostProtocol

};

export const PostComponent = (PostComponentProps:PostComponentProtocol):JSX.Element => {
  
  const [post, setPost] = React.useState(PostComponentProps.data.post); 

  return (
        <StyledPostComponent>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <div className="postImg--container">
            <img className="postImg" alt={ post.postImageAlt } src={ post.postImageURL }/>
            
            <Router.Link to={`/post=${"something"}`} className="mask--container">
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
              <h2 className="postTitle">{ post.title }</h2>
              <p className="postContent">{ post.content }</p>
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

  

