import React from 'react';
import { HomeComponent } from "../../screens/home";
import { PostAdd } from "../../screens/postAdd/index";
import { PostView } from "../../screens/postView/index";
import { Routes, Route} from "react-router-dom";
import {  PostListProvider } from "../../globalContext/post";
import { FeaturedProfessionalsProvider } from "../../globalContext/featuredProfessionals";
import { ERR_404Template } from "../../screens/ERR_404";


export function PublicRoutes() {
  return (

    <FeaturedProfessionalsProvider>

      <PostListProvider>

        <Routes>

          <Route path="/" element={ <HomeComponent /> }/>

          <Route path="/nome-do-post" element={ <PostView /> }/>

          <Route path="/postedit" element={ <PostAdd /> }/>

          <Route path="/createpost" element={ <PostAdd /> }/>

          <Route path="/createpost" element={ <PostAdd /> }/>

          <Route path="/ERR_404" element={ <ERR_404Template /> }/>

        </Routes>

      </PostListProvider>

    </FeaturedProfessionalsProvider>

  );
}