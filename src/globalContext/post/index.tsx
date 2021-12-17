import * as React from "react";
import { posts, PostProps } from "../../storagesInterfaces/posts";

export interface Child {
  children:React.ReactNode
};

export interface PostListProps {
  postList: PostProps[];  // array
  setPost: React.Dispatch<React.SetStateAction<PostProps[]>>;  // React function state controll
};

const PostListContext = React.createContext<PostListProps>( {} as PostListProps );

export function PostListProvider( {children}:Child ):JSX.Element {

  const [ postList, setPost ] = React.useState<PostProps[]>( posts );

  return (
    <PostListContext.Provider value={{ postList, setPost }}>
      { children }
    </PostListContext.Provider>
  )
};

export const usePostList = () => {
  const context = React.useContext( PostListContext );
  if( !context ) console.log( "Buscando dados do feed ..." );
  const { postList, setPost } = context;
  return { postList, setPost };
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

const felipe = new PostCreate({
  key: "445656",
  postImageAlt: "",
  postImageURL: "",
  reactionsAcount: "",
  title: "",
  content: "",
  hasEdited: false,
});
