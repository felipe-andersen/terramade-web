import * as React from "react";
import { posts } from "../../../global/postsContext.d";
import { FollowersUserNameProfileImageMolecule } from "../../../componentsGlobal/molecules";
import { usePostList } from "../../../global/postsContext.d";
import { PostProps } from "../../../home/post";

let { postList, setPost } = usePostList();

let noFound = "Desculpe! Não consegui buscar.";
console.log( noFound )

 //postList.map( p => p /*.key === "key"? true : noFound*/ );

let adapter: MainPostViewProps = {
  setPost: setPost,
  post: postList.map( p => p /*.key === "key"? true : noFound*/ )

};

interface MainPostViewProps {
  setPost: React.Dispatch<React.SetStateAction<PostProps[]>>;
  post: object;
};

class MainPostView extends React.Component {
    state = {
     post: adapter.post
   
    };
  
    onChange( event: any ){
      const { name, value } = event.target;
      const obj = { [name]: value };
      console.log( obj )
    };
  
    onSubmit( event: any ) {
      event.preventDefault();
      /*
      axios.post('http://localhost:5000/promotions', values)
        .then((response) => {
          history.push('/');
        });*/
    };
    
    render(): JSX.Element {
      return  (
      <div className="main">
        <div className="component-form">
          <form className="form">
            <div className="more-publish--btns">
              <button className="more-button" title={ "this.state.post" } onClick={ () => {} }>...</button>
              <button type="submit" className="publish-button" title={ "this.state.post" } onClick={ this.onSubmit }>{ "this.state.post" }</button>
            </div>
            <div className="form-div">
            <div className="imputUpload-container">
              <input className="imputUpload" type="file" name="Image"  accept="image/png, image/jpeg, image/jpg"   aria-label={ "this.state.post" } multiple />
              
              <span>{ "this.state.post" }</span>
              <span>{ "this.state.post" }</span>
            </div>
            <div className="TitleContent">
              <FollowersUserNameProfileImageMolecule/>
              <div className="imputTitle-container">
               <input className="imputTitle" id="imputTitle" name="Title" type="text" aria-label={ "this.state.post" } placeholder={"this.state.post"} onChange={ this.onChange } required/>
              </div>
              <div className="inputContent-container"><input className="inputContent" name="Content" type="text" aria-label={ "this.state.post" } value={ "adapter.post"} placeholder={ "this.state.post" } onChange={ this.onChange }/></div>
              <div className="inputLink-container"><input className="inputContent" name="Content" type="text" aria-label={ "this.state.post" } placeholder={ "this.state.post" } onChange={ this.onChange }/></div>
            </div>
            </div>
          </form>
        </div>
      </div>
      )
    }
  }