import React from "react";
import Square from "./square";
import calculateWinner from "../../util/calculateWinner";


const Board = ({ xIsNext, onPlay, square}) => {

    const handleBtnClick = (id) => {
        // Edge Case: very important to not click on square which is already filled as well as  if winner is declared
        if(calculateWinner(square) || square[id]){
            return;
        }

        const nextSquares = [...square];
        nextSquares[id] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares)
    }

  const winner = calculateWinner(square);

  return (
    <>
    <h3>{winner === null ? `Next Player: ${xIsNext ? 'X' : 'O'}` : ` Winner: ${winner}`}</h3>
      <div className="board-row">
        <Square value={square[0]} onButtonClick={() => handleBtnClick(0)}/>
        <Square value={square[1]} onButtonClick={() => handleBtnClick(1)}/>
        <Square value={square[2]} onButtonClick={() => handleBtnClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={square[3]} onButtonClick={() => handleBtnClick(3)}/>
        <Square value={square[4]} onButtonClick={() => handleBtnClick(4)}/>
        <Square value={square[5]} onButtonClick={() => handleBtnClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={square[6]} onButtonClick={() => handleBtnClick(6)}/>
        <Square value={square[7]} onButtonClick={() => handleBtnClick(7)}/>
        <Square value={square[8]} onButtonClick={() => handleBtnClick(8)}/>
      </div>
    </>
  );
};

export default Board;


