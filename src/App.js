import React from "react";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div>
      <h1>Like Counter</h1>
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
      <ArticleList />
    </div>
  );
}

export default App;
