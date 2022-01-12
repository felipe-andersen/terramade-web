import React from 'react';
import { ERR_404Template } from "../../screens/statusCode/ERR_404--template";
import { LoginComponent } from "../../screens/login";
import {  PostListProvider } from "../../globalContext/post";
import { FeaturedProfessionalsProvider } from "../../globalContext/featuredProfessionals";
import { Route } from "react-router-dom";

export function AuthenticationRoutes() {
  return (

    <FeaturedProfessionalsProvider>

      <PostListProvider>

          <Route path="/" element={ <LoginComponent /> }/>

      </PostListProvider>

    </FeaturedProfessionalsProvider>

  );
}