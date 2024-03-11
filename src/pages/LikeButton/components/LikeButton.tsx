import { memo, useState } from "react";
import { HeartIcon, SpinnerIcon } from "./Icons";

import "./like-button.css";

type ButtonState = "default" | "loading" | "liked";

export default memo(function LikeButton() {
  const [buttonState, setButtonState] = useState<ButtonState>("default");

  const handleButtonClick = async () => {
    const currentState = buttonState;

    setButtonState("loading");

    const response = await fetch(
      "https://www.greatfrontend.com/api/questions/like-button",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: buttonState === "liked" ? "unlike" : "like",
        }),
      }
    );

    if (response.ok) {
      setButtonState(buttonState === "liked" ? "default" : "liked");
    } else {
      setButtonState(currentState);
    }
  };

  return (
    <button
      className={`like-button ${
        buttonState === "liked" && "like-button_liked"
      }`}
      onClick={handleButtonClick}
    >
      {buttonState === "loading" ? <SpinnerIcon /> : <HeartIcon />}
      Like
    </button>
  );
});
