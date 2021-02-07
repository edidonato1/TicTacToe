## Tic Tac Toe

This was a weekend side project from when I was in my bootcamp in late 2020.  Using an array of possible winning scenarios, the game logic uses a matrix of stateful "squares", and uses ES6 Array destructuring to search for winning scenarios:

```
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
  
  ```
