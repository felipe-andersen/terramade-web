import React from "react";

export interface UserProps {
  post: object; //publications
  config: object;
  publicName?: string;
  followersAcount: number; //followers
  userName: string;
  profileImageID: string;
  nativeLanguage?: string;
  languagePreference: string;
  date?: Date; //signinDate signOut
  region?: string;
  country?: string;
  state: string;
  city: string;
  isActive?: boolean;
  //eyeColor?: string;
  interests?: string[];
  personalPronouns?: { 
    ptBR: ["ele", "ela"]
  };
  occupation?: string;
  maritalStatus?: []
  birthDate?: Date;
  presentation?:string;
  checkIns?: [];
  website?: string;
  email1?: string;
  email2?: string;
  apperance?: "auto" | "dark" | "clear" ;
  styles?: [];
  latestInteractions?: [];
  phone1?: string;
  devices?: []
};

