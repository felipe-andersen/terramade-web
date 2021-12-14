import * as React from "react";
import { featuredProfessionals, featuredProfessionalsProps } from "../../db/professionals"


interface IChildren {
  children: React.ReactNode
};

export interface FeaturedProfessionalListProps {
  featuredProfessionalList: featuredProfessionalsProps[];
  setFeaturedProfessionalList: React.Dispatch<React.SetStateAction<featuredProfessionalsProps[]>>;
};

export const FeaturedProfessionalsContext = React.createContext<FeaturedProfessionalListProps>( {} as FeaturedProfessionalListProps );

export function FeaturedProfessionalsProvider( { children }: IChildren ): JSX.Element {

  const [ featuredProfessionalList, setFeaturedProfessionalList ] = React.useState<featuredProfessionalsProps[]>(featuredProfessionals)
  return (
    <FeaturedProfessionalsContext.Provider value={{ featuredProfessionalList, setFeaturedProfessionalList }}>
      { children }
    </FeaturedProfessionalsContext.Provider>
  )
};
