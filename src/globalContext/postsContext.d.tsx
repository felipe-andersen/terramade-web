import * as React from "react";





export const posts:PostListProp = [
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    reactionsAcount: "21",
    title: "Lavagem de estofados",
    content:"dicas simples que podem economizar",
    hasEdited: false
  },
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    reactionsAcount: "26",
    title: "Pintura de casa",
    content:"prepare a lata de tinta adicionando o reagente..",
    hasEdited: false
  },
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    postImageURL: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    reactionsAcount: "35",
    title: "Mesas ergonomicas",
    content:"mesas ajustáveis e ergonomicas para todo o time",
    hasEdited: false
  },
  {
  key: "546385g5gf6gf54gf4565465746",
  postImageAlt: "imagem de qualquer",
  postImageURL:"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
  reactionsAcount: "78",
  title: "Titulo de algima coisa",
  content:"aguma coisa é aqui. deixe seu like",
  hasEdited: false
  },
  {
    key: "546385g5gf6gf54gf4565465746",
    postImageAlt: "imagem de qualquer",
    postImageURL:"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
    reactionsAcount: "78",
    title: "Titulo de algima coisa",
    content:"aguma coisa é aqui. deixe seu like",
    hasEdited: true
    }
];

export interface PostProps {
  key: string;
  postImageAlt: string;
  postImageURL:string;
  reactionsAcount: string; // { reactions1: number,  reactions2: number,  reactions3: number,  reactions4: number,  reactions5: number, }
  title: string;
  content: string;
  hasEdited: boolean
  id?: string
};

type PostListProp = Array<PostProps>;

interface PostListProps {
  postList?: PostListProp;  // array
  setPost?: React.Dispatch<React.SetStateAction<PostListProp>>;  // React function state controll
};

export class PostCreate extends React.Component<PostProps> {
  myPost: PostProps
  constructor(props: PostProps){
    super(props);
    this.myPost = {
      key: this.props.key,
      postImageAlt: this.props.postImageAlt,
      postImageURL: this.props.postImageURL,
      reactionsAcount: this.props.reactionsAcount,
      title: this.props.title,
      content: this.props.content,
      hasEdited: this.props.hasEdited
    };
  };
};




/*
interface PostProviderProps {
  children: React.ReactNode;
};
  //const [ postList , setPost ] = useState<PostListProp>( posts );
  //export const PostContext = createContext<PostListProp>( posts );

export default function PostProvider( { children }: PostProviderProps ) {

 const { postList, setPost } = Context().Provider
  return (
    <PostContext.Provider value={{ postList, setPost }}>
      { children }
    </PostContext.Provider>
  );
 
};

export function usePostList() {
  const context = useContext( PostContext );
  if (!context) throw new Error( "usePosts must be used within a PostProvider" );
  const { postList, setPost } = context;
  return { postList, setPost };
};
*/

export function usePostList() {
  const [ postList, setPost ] = React.useState<Array<PostProps>>( posts );
  /*const setPost = ( aPromise: Promise<any> ) => {
    setState(posts);
    return aPromise.finally(() => setState( posts ));
  };*/
  return { postList, setPost }; 
};