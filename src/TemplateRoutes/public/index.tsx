import React from 'react';
import  {HomeTemplate}  from "../../templates/home";
import { PostAdd } from "../../templates/postAdd/index";
import { PostView } from "../../templates/postView/index";
import { Route } from "react-router-dom";
import { FeaturedProfessionalsProvider } from "../../context/featuredProfessionals";
import { ERR_404Template } from "../../templates/statusCode/ERR_404--template";
import { SplashComponent } from "../../templates/splash/index";




export function PublicRoutes() {

 

  return (

    <FeaturedProfessionalsProvider>

        <FeaturedProfessionalsProvider>

          <Route path="feed" element={ <HomeTemplate /> }/>

        </FeaturedProfessionalsProvider>

          <Route path="/somePost" element={ <PostView /> }/>

          <Route path="/postedit" element={ <PostAdd /> }/>

          <Route path="/createpost" element={ <PostAdd /> }/>

          <Route path="/createpost" element={ <PostAdd /> }/>

          <Route path="/ERR_404" element={ <ERR_404Template /> }/>

          <Route path="/loading" element={ <SplashComponent /> }/>



    </FeaturedProfessionalsProvider>

  );
}