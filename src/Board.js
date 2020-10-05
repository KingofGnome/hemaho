import React, { useState } from "react";
import { canSwap, isSolved, shuffle, swap } from "./helpers";
import Tile from "./Tile";

function Board(props) {
  const { rows, cols, width, height, image } = props;
  const [tiles, setTiles] = useState([...Array(rows * cols).keys()]);
  console.log(tiles);
  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles, rows, cols);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1), rows, cols)) {
      const newTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
      setTiles(newTiles);
    }
    if (isSolved(tiles)) {
      alert("You did it!");
    }
  };

  const handleTileClick = (index) => {
    swapTiles(index);
  };

  const handleButtonClick = () => {
    shuffleTiles();
  };

  const solved = isSolved(tiles);
  const pieceWidth = Math.round(width / cols);
  const pieceHeight = Math.round(height / rows);
  const style = {
    width,
    height,
  };

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            {...props}
            index={index}
            tile={tile}
            key={tile}
            width={pieceWidth}
            height={pieceHeight}
            boardSize={width}
            image={image}
            onClick={handleTileClick}
          />
        ))}
      </ul>
      <button onClick={handleButtonClick}>
        {solved ? "Start" : "Restart"}
      </button>
    </>
  );
}

export default Board;
