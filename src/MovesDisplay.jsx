import MoveBox from './MoveBox.jsx'
import './styles/MovesDisplay.css'

export default function MovesDisplay({moves}) {

  function moveBoxElements () {
    let elements = [];
    moves.history.forEach((move,index) => {
      elements.push( <MoveBox move={move} moveOrder={index} moveNumber={moves.moveNumber} key={move} /> )
    });
    return elements
  }

  return (
    <div className='moves-display-container'>

      <div className="moves-display">
        {moveBoxElements()}
      </div>

      <div className="buttons-container">
        <div className="move-buttons-container">
          <button className="backward"> 
            &lt;
          </button>
          <button className="forward"> 
            &gt; 
          </button>
        </div>
        <div className="reset-button-container">
          <button className="reset">
            Reset 
          </button>
        </div>
      </div>

    </div>
  )

}