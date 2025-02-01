import '../styles/GameMode.css'

export default function GameMode({onChange}) {
  return (

    <form onChange={onChange} className="select-radio-form">

      <fieldset className="radio-fieldset">
        <legend className='fieldset-title'>Game mode:</legend>

        <div className='radio-button'>
          <input type="radio" id="radio-analysis" name="mode-selector" value='Analysis' defaultChecked={true} />
          <label htmlFor='radio-analysis'>Analysis</label>
        </div>
        
        <div className='radio-button'>
          <input type="radio" id="radio-computer" name="mode-selector" value='Computer' />
          <label htmlFor='radio-computer'>Computer</label>
        </div>

      </fieldset>

    </form>

  )
}