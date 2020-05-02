import React, { useContext } from 'react';
import Cells from './Cell';
import BoardContext from './context/BoardContext';


function Board(props) {
    
  const { board, setBoard, turn, setTurn } = useContext(BoardContext);

  function declareWinner(board) {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board);
        console.log(`The winner is player ${board[a]}`);
        return board[a];
      }
    }
    return null;

  }
  const winner = declareWinner(board);
  let status;

  if (winner) {
    status = `The winner is ${winner}`;
  }

  function clickHandler(num) {
    // whenever someone clicks a button, they apply a sate to that specific button
    // we can set this state into the boardState and then check if there's a winner
    if (!winner || board[num]) {
      const updatedBoard = [...board];
      updatedBoard[num] = turn;
      setBoard(updatedBoard);

      console.log(board);
      setTurn((turn === 'X') ? 'O' : 'X');
    }
    console.log('i have been clicked', turn)
  }

  return (
    <div className="board">
      <h3>{status}</h3>

      <div className="row">
        <Cells click={() => clickHandler(0)} value={board[0]}/>
        <Cells click={() => clickHandler(1)} value={board[1]}/>
        <Cells click={() => clickHandler(2)} value={board[2]}/>
      </div>
      
      <div className="row">
        <Cells click={() => clickHandler(3)} value={board[3]}/>
        <Cells click={() => clickHandler(4)} value={board[4]}/>
        <Cells click={() => clickHandler(5)} value={board[5]}/>
      </div>
      
      <div className="row">
        <Cells click={() => clickHandler(6)} value={board[6]}/>
        <Cells click={() => clickHandler(7)} value={board[7]}/>
        <Cells click={() => clickHandler(8)} value={board[8]}/>
      </div>
    </div>

  );
}

function Game() {
  const { turn } = useContext(BoardContext);
  return (
    <div>
      <h1>Player {turn}, it's your turn</h1>
      <Board turn={turn}/>
    </div>
  );
}

export default Game;