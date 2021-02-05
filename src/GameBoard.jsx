import React, { useState } from 'react';
import GameSquare from './GameSquare'


export default function GameBoard({
  winner,
  setWinner,
  playerTurn,
  setPlayerTurn
}) {

  const [squareA1, setSquareA1] = useState(null)
  const [squareA2, setSquareA2] = useState(null)
  const [squareA3, setSquareA3] = useState(null)
  const [squareB1, setSquareB1] = useState(null)
  const [squareB2, setSquareB2] = useState(null)
  const [squareB3, setSquareB3] = useState(null)
  const [squareC1, setSquareC1] = useState(null)
  const [squareC2, setSquareC2] = useState(null)
  const [squareC3, setSquareC3] = useState(null)

  const tictac = [
    [squareA1, squareA2, squareA3],
    [squareB1, squareB2, squareB3],
    [squareC1, squareC2, squareC3],
    [squareA1, squareB1, squareC1],
    [squareA2, squareB2, squareC2],
    [squareA3, squareB3, squareC3],
    [squareA1, squareB2, squareC3],
    [squareC1, squareB2, squareA3]
  ]

  const checkForWinner = () => {
    tictac.map(s => {
      const [a, b, c] = s
      if (a && a === b && a === c) {
        a === 'X' ? setWinner('Player 1') : setWinner('Player 2')
        return a
      }
    })  
  }

  return (

    <div onClick={checkForWinner()} className="game-board">
      <div className="row">
        <GameSquare
          winner={winner}
          coordinate={squareA1}
          setCoordinate={setSquareA1}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        /><GameSquare
          winner={winner}
          coordinate={squareA2}
          setCoordinate={setSquareA2}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        /><GameSquare
          winner={winner}
          coordinate={squareA3}
          setCoordinate={setSquareA3}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        />
      </div>
      <div className="row">
        <GameSquare
          winner={winner}
          coordinate={squareB1}
          setCoordinate={setSquareB1}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        /><GameSquare
          winner={winner}
          coordinate={squareB2}
          setCoordinate={setSquareB2}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        /><GameSquare
          winner={winner}
          coordinate={squareB3}
          setCoordinate={setSquareB3}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        />
      </div>
      <div className="row">
        <GameSquare
          winner={winner}
          coordinate={squareC1}
          setCoordinate={setSquareC1}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        /><GameSquare
          winner={winner}
          coordinate={squareC2}
          setCoordinate={setSquareC2}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        /><GameSquare
          winner={winner}
          coordinate={squareC3}
          setCoordinate={setSquareC3}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        />
      </div >

    </div>
  )
}
