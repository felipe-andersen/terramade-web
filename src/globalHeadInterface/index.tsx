import * as React from "react";

import ReactDOM from 'react-dom';

let HeadHomeScreen:PageHeadProps = {
  title: "Terramade",
  description: "Social network for...",
  favicon: "",
  langURLsProvider: [  
    ["x-default", "pt-br", "en-gb", "en-us"], 
    [
      {
      canonicalXDefault:"http://www.terramade.com/language",
      alternateXDefault: "",
      }
    ]
  ],

  contry: "United State - US",
  region: "jdffgdl",
  state: "New York",
  city: "Broklin",
  renderingType: "SSR",
  isDuplicatePage: true,
  isInfinitePage: true,
  toIndex: true
};

//Se for página infinita vc monta um página finita dinâmicamente

export interface PageHeadProps {
    title: string;
    description: string;
    favicon: string;
    langURLsProvider: [ languages: string[], LangURLs: object[] ];
    contry: string;
    region: string;
    state: string;
    city: string;
    renderingType: string;
    isDuplicatePage: boolean; // default: true
    isInfinitePage?: boolean;
    toIndex?: boolean;
    passwordProtected?: boolean;
    deviceType?: "smartphone" | "tablet" | "desktop" | "smartTV" | "smartWatch"
}

interface SEOfilters {
  contry: string;
  state: string;
  city: string;
  coordenate: string;
}

ReactDOM.render(
  <head>
    <title>{ HeadHomeScreen.title }</title>
    
    { 
    HeadHomeScreen.langURLsProvider.map( i => {
      return (
        <>
          {/*<link rel="alternate" lang={} href="" />*/}
        </>
    )})
    }
  </head>,
  document.getElementById('head')
);