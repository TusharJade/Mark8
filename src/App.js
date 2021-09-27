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

export default function App() {
  var [no, now] = useState("");

  function clik(e) {
    if (e.target.input === undefined) {
      emojiDictonary[e.target.value] = "We dont have this in our databae";
    }
    now(emojiDictonary[e.target.value]);
  }
  console.log(no);
  return (
    <div className="App">
      <h1>Inside outtt !</h1>
      <input className="t" onChange={clik}></input>
      <div>{no}</div>
    </div>
  );
}
