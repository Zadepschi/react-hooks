import React, { useContext } from "react";
import { ColorContext } from "./ColorChange";

function MyTheme() {
  // из массива берём ПЕРВЫЙ элемент — myColor
  const [myColor] = useContext(ColorContext);

  const themeIdeas = {
    backgroundColor: myColor ? "pink" : "blue",
    color: myColor ? "black" : "white",
    padding: "20px",
  };

  return (
    <div className="myTheme" style={themeIdeas}>
      <p>MY THEME</p>
    </div>
  );
}

export default MyTheme;
