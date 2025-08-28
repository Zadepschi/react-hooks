import React, { useContext } from "react";
import { ColorContext } from "./ColorChange";

function MyTheme2() {
  // из массива берём ПЕРВЫЙ элемент — myColor
  const [myColor] = useContext(ColorContext);

  const themeIdeas = {
    backgroundColor: myColor ? "yellow" : "red",
    color: myColor ? "black" : "white",
    padding: "20px",
  };

  return (
    <div className="myTheme2" style={themeIdeas}>
      <p>MY THEME 2</p>
    </div>
  );
}

export default MyTheme2;
