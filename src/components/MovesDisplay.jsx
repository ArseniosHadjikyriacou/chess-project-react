import MoveBox from './MoveBox.jsx'
import MoveButtons from './MoveButtons.jsx'
import '../styles/MovesDisplay.css'

export default function MovesDisplay({moves,setFen,setMoves,setSqrsState}) {

  function handleClickText(moveIndex) {
    setFen(prevFen => {
      return { history: [...prevFen.history], moveNumber: moveIndex+1 }
    });

    setMoves(prevMoves => {
      return { history: [...prevMoves.history], moveNumber: moveIndex+1 }
    });

    setSqrsState( Array(8).fill().map(() => Array(8).fill(0)) );
  }

  function handleClickBack(moveNumber) {
    if (moveNumber-1 >= 0) {
      setFen(prevFen => {
        return { history: [...prevFen.history], moveNumber: prevFen.moveNumber-1 }
      });
  
      setMoves(prevMoves => {
        return { history: [...prevMoves.history], moveNumber: prevMoves.moveNumber-1 }
      });
  
      setSqrsState( Array(8).fill().map(() => Array(8).fill(0)) );
    }
  }

  function handleClickForw(moveNumber) {
    if (moveNumber+1 <= moves.history.length) {
      setFen(prevFen => {
        return { history: [...prevFen.history], moveNumber: prevFen.moveNumber+1 }
      });
  
      setMoves(prevMoves => {
        return { history: [...prevMoves.history], moveNumber: prevMoves.moveNumber+1 }
      });
  
      setSqrsState( Array(8).fill().map(() => Array(8).fill(0)) );
    }
  }

  function handleReset() {
    setFen( { history:['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'], moveNumber: 0 } );
    setMoves( { history: [], moveNumber: 0 } );
    setSqrsState( Array(8).fill().map(() => Array(8).fill(0)) );
  }

  function moveBoxElements () {
    let elements = [];
    moves.history.forEach((move,index) => {
      elements.push( <MoveBox move={move} moveOrder={index} moveNumber={moves.moveNumber} onClickText={() => {handleClickText(index)}} key={move+String(index)} /> )
    });
    return elements
  }

  return (
    <div className='moves-display-container'>

      <div className="moves-display">
        {moveBoxElements()}
      </div>

      <MoveButtons onClickBack={() => {handleClickBack(moves.moveNumber)}} onClickForw={() => {handleClickForw(moves.moveNumber)}} onReset={handleReset} />

    </div>
  )

}