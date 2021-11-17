import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeComponent } from "./screens/home";
import { PostAdd } from "./screens/postAdd/index";
import { PostView } from "./screens/postView/index";
import { Routes, Route} from "react-router-dom";



function App() {
  return (
  <Routes>
    <Route path="/" element={<HomeComponent />} />
    <Route path="/createpost" element={<PostAdd />} />
    <Route path="/nome-do-post" element={<PostView />} />
    <Route path="/postedit" element={<PostAdd />} />
    <Route path="/createpost" element={<PostAdd />} />
  </Routes>
  );
}

export default App;
 /*  <PostAdd />      <Home /> */