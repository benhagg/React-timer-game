import { useState, useRef } from "react";

export default function Player() {
  const pName = useRef();
  const [playerName, setPlayerName] = useState("Dude");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleNameChange();
    }
  }
  function handleNameChange() {
    setPlayerName(pName.current.value);
    pName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input
          ref={pName}
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Change name and press enter"
        />
      </p>
    </section>
  );
}
