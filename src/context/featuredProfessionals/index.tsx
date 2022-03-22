import * as React from "react";
import { featuredProfessionals, featuredProfessionalsProps } from "../../assets/dataSet/professionals"


interface IChildren {
  children: React.ReactNode
};

export interface FeaturedProfessionalListProps {
  featuredProfessionalList: featuredProfessionalsProps[];
  setFeaturedProfessionalList: React.Dispatch<React.SetStateAction<featuredProfessionalsProps[]>>;
};

const FeaturedProfessionalsContext = React.createContext<FeaturedProfessionalListProps>( {} as FeaturedProfessionalListProps );

export function FeaturedProfessionalsProvider( { children }: IChildren ): JSX.Element {

  const [ featuredProfessionalList, setFeaturedProfessionalList ] = React.useState<featuredProfessionalsProps[]>(featuredProfessionals)
  return (
    <FeaturedProfessionalsContext.Provider value={{ featuredProfessionalList, setFeaturedProfessionalList }}>
      { children }
    </FeaturedProfessionalsContext.Provider>
  )
};

export const useFeaturedProfessionals = () => {
  const context = React.useContext(FeaturedProfessionalsContext);
  const {featuredProfessionalList} = context

  return {featuredProfessionalList}
};

export const FeaturedProfessionals_provider_hook = () => {
  return {FeaturedProfessionalsProvider, useFeaturedProfessionals}
}