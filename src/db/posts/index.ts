import * as React from "react";




export interface PostProps {
  key: string;
  postImageAlt: string;
  postImageURL:string;
  reactionsAcount: string; // { reactions1: number,  reactions2: number,  reactions3: number,  reactions4: number,  reactions5: number, }
  title: string;
  content: string;
  listUsersWhoLiked?: [];
  listUsersWhoShared?: [];
  hasEdited: boolean;
  id?: string;
  local?: string;
  views?: string;
  sharedAcount?: number;
  tags?: [];
  complaint?: number;
  reach?: {};
  doNotRecommend?: number;
  ImNotInterested?: number;
  saved?: number;
  impressions?:number;
  statistic?: {}
  
};

export const posts:PostProps[] = [
  
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9icENscy72JIKM3_x431fbb-MT4pxYFWRp-s7VZiE6liFB4qeQrrji5TY0Ysk60N2mzs&usqp=CAU",
    reactionsAcount: "35",
    title: "Mesas ergonomicas",
    content:"mesas ajustáveis e ergonomicas para todo o time",
    hasEdited: false
  },
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://s2.glbimg.com/wZ2YslEPcqRdqCo74JqlcfggE_Q=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/04/25/sala-de-jantar-com-adega-assinado-por-gloria-copello--para-a-mostra-decora-lider---rio-2016-2.jpg",
    reactionsAcount: "26",
    title: "Pintura de casa",
    content:"prepare a lata de tinta adicionando o reagente..",
    hasEdited: false
  },
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9icENscy72JIKM3_x431fbb-MT4pxYFWRp-s7VZiE6liFB4qeQrrji5TY0Ysk60N2mzs&usqp=CAU",
    reactionsAcount: "35",
    title: "Mesas ergonomicas",
    content:"mesas ajustáveis e ergonomicas para todo o time",
    hasEdited: false
  },
  {
  key: "546385g5gf6gf54gf4565465746",
  postImageAlt: "imagem de qualquer",
  postImageURL:"https://i.pinimg.com/736x/24/8a/da/248adab856d44dc0154336e0d0b024e3.jpg",
  reactionsAcount: "78",
  title: "Titulo de algima coisa",
  content:"aguma coisa é aqui. deixe seu like",
  hasEdited: false
  },
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "imagem de qualquer",
    postImageURL:"https://i.pinimg.com/736x/24/8a/da/248adab856d44dc0154336e0d0b024e3.jpg",
    reactionsAcount: "78",
    title: "Titulo qualquer aqui",
    content:"aguma coisa é aqui. deixe seu like",
    hasEdited: true
  },
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://s2.glbimg.com/wZ2YslEPcqRdqCo74JqlcfggE_Q=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/04/25/sala-de-jantar-com-adega-assinado-por-gloria-copello--para-a-mostra-decora-lider---rio-2016-2.jpg",
    reactionsAcount: "26",
    title: "Pintura de casa",
    content:"prepare a lata de tinta adicionando o reagente..",
    hasEdited: false
  }
];