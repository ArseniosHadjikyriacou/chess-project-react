import './styles/MoveButtons.css'

export default function MovesButtons({onClickBack,onClickForw,onReset}) {

  return (

    <div className="buttons-container">
      <div className="move-buttons-container">
        <button className="backward" onClick={onClickBack}> 
          &lt;
        </button>
        <button className="forward" onClick={onClickForw}> 
          &gt; 
        </button>
      </div>
      <div className="reset-button-container">
        <button className="reset" onClick={onReset}>
          Reset 
        </button>
      </div>
    </div>

  )

}