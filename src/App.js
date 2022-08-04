import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"
import handleStartClick from "./Board"

function App() {
  const [imgUrl, setImgUrl] = useState("https://github.com/KingofGnome/hemaho/raw/main/aubergineneintopf-mit-zitronencouscous4x4.jpg")

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
      <h1>Helena und Mariano's Rätselspaß</h1>
      <div class="center">So einfach machen wirs euch nicht <br/>
        erst müsst ihr dies Puzzle beenden. <br/>
        Dann kocht euch jenes leckere Gericht <br/>
        ein Foto davon müsst ihr uns senden. <br/>
        <br/>
        Wohin erfahrt ihr nach dem Rätselspiel. <br/>
        Eine Belohnung wartet wenn uns das Foto gefiel. <br/>
      </div>
      <Board imgUrl={imgUrl} />
    </div>
  );
}


export default App;
