  import './App.css'
  import { useState, useEffect } from 'react'

  function App() {
    const emptyBoard = Array(9).fill("");

    const [board, setBoard] = useState(emptyBoard)
    const [currentPlayer, setCurrentPlayer] = useState("O");
    const [winner, setWinner] = useState(null);

    const resetGame = () => {
      setBoard(emptyBoard);
      setWinner(null);
      setCurrentPlayer("O");
    }



    const handleCellClick = (index) => {

      if (board[index] !== "") return null;
      

      setBoard(board.map ((item,itemIndex)=>itemIndex === index ? currentPlayer : item));

      setCurrentPlayer(currentPlayer === "O" ? "X" : "O");
    }

    const checkWinner = () => {
      const possibleWaysToWin = [
        [board[0], board[1], board[2]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]],

        [board[0], board[3], board[6]],
        [board[1], board[4], board[7]],
        [board[2], board[5], board[8]],

        [board[0], board[4], board[8]],
        [board[2], board[4], board[6]],
      ]
      possibleWaysToWin.forEach(cells=>{
        if(cells.every(item => item === "X")) {
          setTimeout(() => {
            alert("X venceu")
            resetGame()
          },500)
        } else if(cells.every(item => item === "O")) {
          setTimeout(() => {
            alert("O venceu")
            resetGame()
          },500)
        
        }
      })
    }
    
  useEffect(checkWinner , [board])

    return (
      <>
        <main>
          <h1 className='title'>Jogo da Velha</h1>
          <h3>Developed by: Henrique Reis</h3>

          <div className="board">
            {board.map((item, index) => (
              <div onClick={() => handleCellClick(index)} key={index} className={`cell ${item}`}>
                {item}
              </div>
            ))}
          </div>
        </main>
      </>
    )
  }

  export default App;
