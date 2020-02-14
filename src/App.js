import React from 'react';
import NavMain from "./Component/navMain";
import ProductAddSection from "./Component/productAddSection"
import PostList from "./Component/PostList";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMain/>
      <ProductAddSection/>
        <PostList/>
    </div>
  );
}

export default App;
