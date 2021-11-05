import * as React from "react";
import { NewPost } from "../../../global/postsContext.d";
import { Main, MainProps } from "./index";
import { PostProps } from "../../../global/postsContext.d"
import { language } from "../../../global/language"


let translate:MainProps = {
  ariaLabelUpload: "Carregue um arquivo de imagem",
  ariaLabelTitle: "Adicione um título",
  ariaLabelUploadContent: "Adicione uma descrição",
  moreButton: "...",
  publishButton: "Publicar",
  dragAndDropInfo: "Araste e solte ou clique para carregar",
  recommendationInfo: "Recomendação: use arquivos .jpg de alta qualidade com menos de 20MB",
};

switch ( language ) {
    case "ptBR":
      translate =   {
        ariaLabelUpload: "Carregue um arquivo de imagem",
        ariaLabelTitle: "Adicione um título",
        ariaLabelUploadContent: "Adicione uma descrição",
        moreButton: "...",
        publishButton: "Publicar",
        dragAndDropInfo: "Araste e solte ou clique para carregar",
        recommendationInfo: "Recomendação: use arquivos .jpg de alta qualidade com menos de 20MB",
      };
    ;
        break;
    case "esES":
      translate =  {
        ariaLabelUpload: "Cargar un archivo de imagen",
        ariaLabelTitle: "Añade un título",
        ariaLabelUploadContent: "Añade una descripción",
        moreButton: "...",
        publishButton: "Publicar",
        dragAndDropInfo: "Araste y suelte o haga clic para cargar",
        recommendationInfo: "Recomendación: utilice archivos . jpg de alta calidad con menos de 20MB",
      };
    ;
        break;
    case "enUSA":
      translate =   {
        ariaLabelUpload: "Upload an image file",
        ariaLabelTitle: "Add a title",
        ariaLabelUploadContent: "Add a description",
        moreButton: "...",
        publishButton: "Publish",
        dragAndDropInfo: "Drag and drop or click to load",
        recommendationInfo: "Recommendation: Use high quality .jpg files under 20MB",
      };
    ;
        break;
};

export let KitTranslate = translate;

const initialValuePost:PostProps = {
    postImageAlt: "",
    postImageURL:"",
    reactionsAcount: "",
    title: "",
    content: "",
};

//const createPost = new NewPost( initialValuePost );





