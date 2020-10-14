import React, { useState, useEffect } from "react";

function LikeCounter() {
  let initial_numLikes = 0;
  let [numLikes, setNumLikes] = useState(initial_numLikes);

  function handleClick() {
    console.log("I got clicked! Current number of likes:", numLikes);
    setNumLikes(numLikes + 1);
  }

  function reset() {
    console.log("Reset clicked!");
    setNumLikes(numLikes - numLikes);
  }

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);
  //   This effect should happen every time the numLikes changes

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={handleClick}>Like</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}

export default LikeCounter;
