import React from 'react';
import  {HomeTemplate} from "../templates/home";
import { PostAdd } from "../templates/postAdd/index";
import { PostView } from "../templates/postView/index";
import { Routes, Route} from "react-router-dom";
import { FeaturedProfessionalsProvider } from "../context/featuredProfessionals";
import { StatusCodeTamplate } from "../templates/statusCode";
import { LoginComponent } from "../templates/login";
import { SplashComponent } from "../templates/splash/index";


export function AllRoutes() {
 
  return (

        <Routes>
          
          <Route path="" element={ <HomeTemplate/> }/>
  
        {/* 
          <Route path="/" element={ <HomeTemplate/> }/>

          <Route path="/feed" element={ <HomeTemplate/> }/>
            
          <Route path="/logIn" element={ <LoginComponent/> }/>

          <Route path="/somePost" element={ <PostView/> }/>

          <Route path="/postedit" element={ <PostAdd/> }/>

          <Route path="/createpost" element={ <PostAdd/> }/>

          <Route path="/status_code" element={ <StatusCodeTamplate/> }/>

          <Route path="/loading" element={ <SplashComponent /> }/>
        */}
        </Routes>
  );
}