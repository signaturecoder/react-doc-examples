import React, { useState } from "react";
import Board from "./board";

const Game = () => {
  const [isXNextPlayer, setIsXNextPlayer] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // keep track of which step the user is currently viewing
  const [currentMove, setCurrentMove] = useState(0);
  const currentSqaures = history[currentMove];

  const handlePlay = (nextSquares) => {
    // Keep the old history to the current move only and then add additional squares
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsXNextPlayer(!isXNextPlayer);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setIsXNextPlayer(nextMove % 2 === 0);
  };

  const moves = history.map((currentState, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={isXNextPlayer}
          square={currentSqaures}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
