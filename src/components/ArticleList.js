import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";
import axios from "axios";

function ArticleList() {
  const [articles, set_articles] = useState();

  function clearNotifications() {
    console.log("I got clicked!");
    set_articles([]);
  }

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      await Timeout.set(2000);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res);
      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <button onClick={clearNotifications}>Clear notifications</button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {!articles
        ? "Loading..."
        : articles.map(function (article) {
            return (
              <ArticleCard
                key={article.id}
                title={article.title}
                body={article.body}
              />
            );
          })}
    </div>
  );
}

export default ArticleList;

// {articles.map(function (article) {
//     return (
//       <ArticleCard
//         key={article.id}
//         title={article.title}
//         body={article.body}
//       />
//     );
//   })}
