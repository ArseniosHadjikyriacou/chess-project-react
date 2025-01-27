import './styles/MoveBox.css'

export default function MoveBox({move,moveOrder,moveNumber,onClickText}) {

  let moveBox;

  const rowNumber = Math.ceil( (moveOrder+1)/2 );
  if (rowNumber%2 === 0) {
    if ((moveOrder+1)%2 === 0) {
      moveBox = <div className='move-box white-move' onClick={onClickText}> {move} </div>
    } else {
      moveBox = <div className='move-box black-move' onClick={onClickText}> {move} </div>
    }
  } else {
    if ((moveOrder+1)%2 === 0) {
      moveBox = <div className='move-box black-move' onClick={onClickText}> {move} </div>
    } else {
      moveBox = <div className='move-box white-move' onClick={onClickText}> {move} </div>
    }
  }
  
  if (moveOrder === moveNumber-1) {
    moveBox = <div className='move-box current-move'> {move} </div>
  }

  return (
    <div className='move-box-container'>
      {moveBox}
    </div>
  )
}