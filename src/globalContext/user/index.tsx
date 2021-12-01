import React from "react";

export interface UserProps {
  post: object;
  config: object;
  followersAcount: number;
  userName: string;
  profileImageID: string;
  language: string;
  date?: Date;
  state: string;
  city: string;
}; 
