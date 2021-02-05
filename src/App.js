import React, { useState } from 'react'
import './App.css';
import GameBoard from './GameBoard'

function App() {
  const [playerTurn, setPlayerTurn] = useState('Player 1')
  const [winner, setWinner] = useState(null)

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <h2>Winner: {winner}</h2>
      <h2>{playerTurn}</h2>
      <GameBoard
        winner={winner}
        setWinner={setWinner}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
      />
    </div>
  );
}

export default App;
