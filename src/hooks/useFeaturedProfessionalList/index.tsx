import * as React from "react";
import { FeaturedProfessionalsContext } from "../../globalContext/featuredProfessionals";



const useFeaturedProfessionalList = () => {
  const context = React.useContext( FeaturedProfessionalsContext );
  if( !context ) console.log( "waiting for data ..." );
  const { featuredProfessionalList, setFeaturedProfessionalList  } = context;
  return { featuredProfessionalList, setFeaturedProfessionalList  };
}

export default useFeaturedProfessionalList();

