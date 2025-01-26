import { useState } from 'react'
import ChessBoard from './ChessBoard.jsx'
import MovesDisplay from './MovesDisplay.jsx'
import './styles/Main.css'

export default function Main() {

  const [fen,setFen] = useState( localStorage.getItem('fen') ? localStorage.getItem('fen') :
                                 { history:['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'] , moveNumber:0 } )

  const [moves,setMoves] = useState( localStorage.getItem('moves') ? localStorage.getItem('moves') : 
                                     { history:[] , moveNumber:0 } )

  const [sqrsState,setSqrsState] = useState( Array(8).fill().map(() => Array(8).fill(0)) )
  

  return (

    <div className='main-section'>
      <ChessBoard fen={fen} sqrsState={sqrsState} setFen={setFen} setMoves={setMoves} setSqrsState={setSqrsState} />
      <MovesDisplay moves={moves} />
    </div>

  )
}