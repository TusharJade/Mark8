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

var username = "Tushar";
var userloggedIn = true;

function usernameOne() {
  if (userloggedIn) {
    return username;
  }
  return "no Name";
}

export default function App() {
  return (
    <div className="App">
      <h2>welcome {usernameOne()} </h2>
    </div>
  );
}
