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
var emojiweknow = Object.keys(emojiDictonary);

export default function App() {
  var [no, now] = useState("");
  function clik(e) {
    if (emojiDictonary[e.target.value] === undefined) {
      emojiDictonary[e.target.value] = "We dont have this in our database";
    }
    now(emojiDictonary[e.target.value]);
  }
  function emojiclick(emoji) {
    var meaning = emojiDictonary[emoji];
    now(meaning);
  }

  return (
    <div className="App">
      <header
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.7rem",
          backgroundColor: "#F3F4F6",
          padding: "2rem",
          borrderRadius: "1rem",
          marginBottom: "5rem"
        }}
      >
        Animals and Nature
      </header>

      <h1>Inside outtt !</h1>
      <input className="t" onChange={clik}></input>
      <h2>{no}</h2>
      <h3>Emoji we know </h3>
      {emojiweknow.map((emoji) => {
        return (
          <strong
            onClick={() => {
              emojiclick(emoji);
            }}
            key={emoji}
            style={{ fontSize: "1.3rem", cursor: "pointer", padding: "1rem" }}
          >
            {emoji}
          </strong>
        );
      })}
    </div>
  );
}
