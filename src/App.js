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
function getColor(index) {
  if (index % 2 === 0) {
    return "red";
  }
  return "white";
}

function handler(item) {
  console.log("clicked", item);
}

export default function App() {
  return (
    <div className="App">
      <h2>welcome </h2>
      {list.map((item, index) => {
        return (
          <li
            key={item}
            onClick={() => {
              handler(item);
            }}
            style={{ backgroundColor: getColor(index) }}
          >
            {item}
          </li>
        );
      })}
    </div>
  );
}
