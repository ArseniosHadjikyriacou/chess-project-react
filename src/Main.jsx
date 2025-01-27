import { useState } from 'react'
import { Chess } from 'chess.js'
import generateComputerMove from './utils/chess-api.js'
import ChessBoard from './ChessBoard.jsx'
import MovesDisplay from './MovesDisplay.jsx'
import GameMode from './GameMode.jsx'
import './styles/Main.css'

export default function Main() {
  
  const [fen,setFen] = useState( localStorage.getItem('fen') ? JSON.parse(localStorage.getItem('fen')) :
                                 { history:['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'] , moveNumber:0 } )

  const [moves,setMoves] = useState( localStorage.getItem('moves') ? JSON.parse(localStorage.getItem('moves')) : 
                                     { history:[] , moveNumber:0 } )

  const [sqrsState,setSqrsState] = useState( Array(8).fill().map(() => Array(8).fill(0)) )

  const [gameMode,setGameMode] = useState( 'Analysis' )

  localStorage.setItem('fen', JSON.stringify(fen));
  localStorage.setItem('moves', JSON.stringify(moves));

  function handleSubmitMode(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const mode = formData.get('mode-selector')
    setGameMode(mode)
  }

  function statusToDisplay (color) {
    const chess = new Chess()
    chess.load(fen.history[fen.moveNumber])
    const isCheckmate = chess.isCheckmate()
    const isStalemate = chess.isStalemate()

    if (isCheckmate) {
      if (color === 'w') {
        return (
        <div className='turn-container'>
          <div className='white-box'></div>
          <div className='status-text'>Checkmate!</div>
          <GameMode onSubmit={handleSubmitMode} />
        </div>
        )
      } else {
        return (
          <div className='turn-container'>
            <div className='black-box'></div>
            <div className='status-text'>Checkmate!</div>
            <GameMode onSubmit={handleSubmitMode} />
          </div>
          )
      }
    } else if (isStalemate) {
      if (color === 'w') {
        return (
        <div className='turn-container'>
          <div className='white-box'></div>
          <div className='status-text'>Stalemate!</div>
          <GameMode onSubmit={handleSubmitMode} />
        </div>
        )
      } else {
        return (
          <div className='turn-container'>
            <div className='black-box'></div>
            <div className='status-text'>Stalemate!</div>
            <GameMode onSubmit={handleSubmitMode} />
          </div>
          )
      }
    } else {
      if (color === 'w') {
        return (
        <div className='turn-container'>
          <div className='white-box'></div>
          <div className='status-text'>White to play</div>
          <GameMode onSubmit={handleSubmitMode} />
        </div>
        )
      } else {
        return (
          <div className='turn-container'>
            <div className='black-box'></div>
            <div className='status-text'>Black to play</div>
            <GameMode onSubmit={handleSubmitMode} />
          </div>
          )
      }
    }
    
  }

  const playColor = fen.history[fen.moveNumber].split(' ')[1]
  if (gameMode === 'Computer' && playColor === 'b') {
    generateComputerMove(fen,setFen,setMoves,setSqrsState)
  }
  
  return (

    <div className='main-section'>
      <ChessBoard fen={fen} sqrsState={sqrsState} setFen={setFen} setMoves={setMoves} setSqrsState={setSqrsState} />
      <MovesDisplay moves={moves} setFen={setFen} setMoves={setMoves} setSqrsState={setSqrsState} />
      {statusToDisplay(fen.history[fen.moveNumber].split(' ')[1])}
    </div>

  )
}