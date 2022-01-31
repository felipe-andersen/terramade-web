import React from 'react';
import  HomeTemplate  from "../../screens/home";
import { PostAdd } from "../../screens/postAdd/index";
import { PostView } from "../../screens/postView/index";
import { Route } from "react-router-dom";
import {  PostListProvider } from "../../globalContext/post";
import { FeaturedProfessionalsProvider } from "../../globalContext/featuredProfessionals";
import { ERR_404Template } from "../../screens/statusCode/ERR_404--template";
import { SplashComponent } from "../../screens/splash/index";




export function PublicRoutes() {
  return (

    <FeaturedProfessionalsProvider>

      <PostListProvider>

          <Route path="feed" element={ <HomeTemplate /> }/>

          <Route path="/nome-do-post" element={ <PostView /> }/>

          <Route path="/postedit" element={ <PostAdd /> }/>

          <Route path="/createpost" element={ <PostAdd /> }/>

          <Route path="/createpost" element={ <PostAdd /> }/>

          <Route path="/ERR_404" element={ <ERR_404Template /> }/>

          <Route path="/loading" element={ <SplashComponent /> }/>

      </PostListProvider>

    </FeaturedProfessionalsProvider>

  );
}