import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"
import handleStartClick from "./Board"

function App() {
  const [imgUrl, setImgUrl] = useState("https://github.com/KingofGnome/hemaho/raw/main/recep.jpg")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  const handleImageChange = (e) => {
    setImgUrl(e.target.value)
    window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
  }

  return (
    <div className="App">
      <h1>Helena und Mariano</h1>
      <Board imgUrl={imgUrl} />
    </div>
  );
}


export default App;
