import React, { useState } from "react";
import "./styles.css";

var emojiDictonary = {
  "🙈": "See-No-Evil Monkey",
  "🦁": "lion",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🔥": "fire",
  "🌈": "Rainbow",
  "💧": "Droplet",
  "🦀": "Crab"
};

var list = ["milk", "butter", "icecream", "juice", "banana", "apple", "toast"];

export default function App() {
  return (
    <div className="App">
      <h1>Inside outtt !</h1>
      {list.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
}
