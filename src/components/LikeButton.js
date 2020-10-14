import React, { useState } from "react";

function LikeButton() {
  let [buttonText, setButtonText] = useState("Like this");

  function handleLike() {
    console.log("I got clicked!");
    if (buttonText === "Like this") {
      setButtonText("You've liked this. Click to unlike");
    } else {
      setButtonText("Like this");
    }
  }

  return (
    <div>
      <button onClick={handleLike}>{buttonText}</button>
    </div>
  );
}

export default LikeButton;
