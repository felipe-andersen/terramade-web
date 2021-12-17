import * as React from "react";


export interface featuredProfessionalsProps {
  name: string;
  professional: string;
  featuredGallery: [];
  views: number;
  sharing: number;
  comments: number;
  //likes: 465, 
  //dislikes: 4456,
  //saved: 7657,
 };

export const featuredProfessionals:featuredProfessionalsProps[] = [
  {  
    name: "Giliano",
    professional: "Arquiteto",
    featuredGallery: [],
    views: 5,
    sharing: 565,
    comments: 5446
  },
  {
    name: "Jô",
    professional: "Desing de Interiores",
    featuredGallery: [],
    views: 5,
    sharing: 565,
    comments: 5446
  },
  {
    name: "Lucas Machado",
    professional: "Artista plástico",
    featuredGallery: [],
    views: 5,
    sharing: 565,
 
    comments: 5446
  },
  {
    name: "Mirela Gomes",
    professional: "Decorador",
    featuredGallery: [],
    views: 5,
    sharing: 565,
    comments: 5446
  }
];