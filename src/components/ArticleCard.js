import React from "react";

function ArticleCard(props) {
  return (
    <div className="Article">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}

export default ArticleCard;
