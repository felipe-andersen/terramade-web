import * as React from 'react';
import { UserList } from "../../../db/users";
import { usePostList  } from '../../../globalContext/post';
import { themes } from '../../../globalContext/theme';
import { PostComponent, PostProps } from "../post";
import { NotificationListModal } from "../notificationListModal"; 
import styled from "styled-components";
import { MainComponentStyled } from "./styles";





// quando vc passa propiedades para um component você é obrigado atulaizar o estado dele
// Components que não podem ter seu estado alterado, precisam tomar cuidado com renderização  dinamica

export function MainComponent():JSX.Element {
  const { postList, setPost } = usePostList();
  const FeedDependency =  [ postList, setPost ];
  return (
    <MainComponentStyled>

      <div className="hightlight">

        <div className="short">

          <div className="storiePic--container">

            <a className="storiePic container" href="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            </a>
          </div>

          <div className="picNameProfession-container">

            <img className="professionalPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            <div className="nameProfession--container">
              <a href="" className="name">Daniel Sharezaed</a>
              <a href="" className="">Design de Interiores</a>
            </div>
          </div>
        </div>

        <div className="short">

          <div className="storiePic--container">

            <a className="storiePic container" href="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            </a>
          </div>
          <div className="picNameProfession-container">

            <img className="professionalPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            <div className="nameProfession--container">
              <a href="" className="name">Daniel Sharezaed</a>
              <a href="" className="">Design de Interiores</a>
            </div>
          </div>
        </div>

        <div className="short">
          <div className="storiePic--container">
            <a className="storiePic container" href="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            </a>
          </div>
          <div className="picNameProfession-container">
            <img className="professionalPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            <div className="nameProfession--container">
              <a href="" className="name">Daniel Sharezaed</a>
              <a href="" className="">Design de Interiores</a>
            </div>
          </div>
        </div>

        <div className="short">
          <div className="storiePic--container">
            <a className="storiePic container" href="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            </a>
          </div>
          <div className="picNameProfession-container">
            <img className="professionalPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            <div className="nameProfession--container">
              <a href="" className="name">Daniel Sharezaed</a>
              <a href="" className="">Design de Interiores</a>
            </div>
          </div>
        </div>

        <div className="short">
          <div className="storiePic--container">
            <a className="storiePic container" href="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            </a>
          </div>
          <div className="picNameProfession-container">
            <img className="professionalPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            <div className="nameProfession--container">
              <a href="" className="name">Daniel Sharezaed</a>
              <a href="" className="">Design de Interiores</a>
            </div>
          </div>
        </div>

        <div className="short">
          <div className="storiePic--container">
            <a className="storiePic container" href="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            </a>
          </div>
          <div className="picNameProfession-container">
            <img className="professionalPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
            <div className="nameProfession--container">
              <a href="" className="name">Daniel Sharezaed</a>
              <a href="" className="">Design de Interiores</a>
            </div>
          </div>
        </div>
      </div>

      <div className="gridFeed">
      {
        postList.map( post => {
          return (
            <PostComponent 
              postImageAlt={post.postImageAlt}
              postImageURL={ post.postImageURL }
              reactionsAcount={ post.reactionsAcount }
              title={ post.title }
              content={ post.content}
              key={ post.key }
              hasEdited={ post.hasEdited }
               
              userName={ "João Neto"}
              profileImageID={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"}
              followersAcount={5}
              state={"SP"}
              city={"São Paulo"}
            />
          )
        })
      }
      </div>
      </MainComponentStyled>
    )
  }
;






