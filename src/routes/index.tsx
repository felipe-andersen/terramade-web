import React from 'react';
import { HomeTemplate } from "../screens/home";
import { PostAdd } from "../screens/postAdd/index";
import { PostView } from "../screens/postView/index";
import { Routes, Route} from "react-router-dom";
import {  PostListProvider } from "../globalContext/post";
import { FeaturedProfessionalsProvider } from "../globalContext/featuredProfessionals";
import { StatusCodeTamplate } from "../screens/statusCode";
import { LoginComponent } from "../screens/login";
import { SplashComponent } from "../screens/splash/index";

export function AllRoutes() {
  return (

    <FeaturedProfessionalsProvider>

      <PostListProvider>

        <Routes>

        <Route path="" element={ <HomeTemplate/> }/>

          <Route path="/" element={ <HomeTemplate/> }/>
            
          <Route path="/login" element={ <LoginComponent/> }/>

          <Route path="/feed" element={ <HomeTemplate/> }/>

          <Route path="/nome-do-post" element={ <PostView/> }/>

          <Route path="/postedit" element={ <PostAdd/> }/>

          <Route path="/createpost" element={ <PostAdd/> }/>

          <Route path="/status_code" element={ <StatusCodeTamplate/> }/>

          <Route path="/loading" element={ <SplashComponent /> }/>

        </Routes>

      </PostListProvider>

    </FeaturedProfessionalsProvider>

  );
}