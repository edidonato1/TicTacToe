import React, { useState } from 'react'

function GameSquare({
  winner,
  coordinate,
  setCoordinate,
  playerTurn,
  setPlayerTurn
}) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    if (selected === false && !winner) {
      setCoordinate(playerTurn === 'Player 1' ? "X" : "O")
      setSelected(true)
      playerTurn === 'Player 1' ? setPlayerTurn('Player 2') : setPlayerTurn('Player 1')
    }
  }

  return (
    <div>
      <div className="square" onClick={handleClick}>{coordinate}</div>
    </div>
  )
}

export default GameSquare 