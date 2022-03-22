import * as React from "react";
import { posts as postList, PostProtocol } from "../../assets/dataSet/posts";

export interface ChildrenProtocol {
  children:React.ReactNode
};

export interface PostListProps {
  posts: PostProtocol[];  // array
  setPosts: React.Dispatch<React.SetStateAction<PostProtocol[]>>;  // React function state controll
};

const PostsContext = React.createContext<PostListProps>({} as PostListProps);

export function PostsProvider({children}:ChildrenProtocol):JSX.Element {

  const [posts, setPosts] = React.useState<PostProtocol[]>(postList);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  )
};

export const usePosts = () => {
  const context = React.useContext(PostsContext);
  if(!context) console.log("Buscando dados do feed ...");
  const {posts, setPosts} = context;
  return {posts, setPosts};
};

export const Posts_provider_hook = () => {
  return {PostsProvider, usePosts}
};






export class PostCreate extends React.Component<PostProtocol> {
  myPost: PostProtocol
  constructor(props: PostProtocol){
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
console.log(felipe)