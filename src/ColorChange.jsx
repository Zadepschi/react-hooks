import React, { useContext } from "react";
export const ColorContext = React.createContext();

function ColorChange() {
  // из массива берём ТОЛЬКО второй элемент — setMyColor
  const [, setMyColor] = useContext(ColorContext);

  function changeColor() {
    setMyColor(prev => !prev);
  }

  return (
    <div className="colorChange">
      <h2>Click and the color will change</h2>
      <button onClick={changeColor}>Change a color</button>
    </div>
  );
}

export default ColorChange;
