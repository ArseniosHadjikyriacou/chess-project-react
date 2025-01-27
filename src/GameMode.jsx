import './styles/GameMode.css'

export default function GameMode() {
  return (

    <div className="select-radio-form">
      <label>
        <input type="radio" id="radio-analysis" name="mode-selector" checked/><span>Analysis</span>
      </label><br/>
      <label>
        <input type="radio" id="radio-computer" name="mode-selector"/><span>Computer</span>
      </label>
    </div>


  )
}