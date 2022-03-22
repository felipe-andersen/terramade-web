import React from 'react';
import { ERR_404Template } from "../../templates/statusCode/ERR_404--template";
import { LoginComponent } from "../../templates/login";

import { FeaturedProfessionalsProvider } from "../../context/featuredProfessionals";
import { Route } from "react-router-dom";

export function AuthenticationRoutes() {
  return (

    <FeaturedProfessionalsProvider>



          <Route path="/" element={ <LoginComponent /> }/>

   

    </FeaturedProfessionalsProvider>

  );
}