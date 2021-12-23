import React from 'react';
import { ERR_404Template } from "../../screens/ERR_404";
import { LoginComponent } from "../../screens/login";
import {  PostListProvider } from "../../globalContext/post";
import { FeaturedProfessionalsProvider } from "../../globalContext/featuredProfessionals";
import { Routes, Route} from "react-router-dom";

export function AuthenticationRoutes() {
  return (

    <FeaturedProfessionalsProvider>

      <PostListProvider>

        <Routes>

          <Route path="/" element={ <LoginComponent /> }/>

        </Routes>

      </PostListProvider>

    </FeaturedProfessionalsProvider>

  );
}