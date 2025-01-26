import './styles/MoveBox.css'

export default function MoveBox({move,moveOrder,moveNumber}) {

  let moveBox;

  const rowNumber = Math.ceil( (moveOrder+1)/2 );
  if (rowNumber%2 === 0) {
    if ((moveOrder+1)%2 === 0) {
      moveBox = <div className='move-box white-move'> {move} </div>
    } else {
      moveBox = <div className='move-box black-move'> {move} </div>
    }
  } else {
    if ((moveOrder+1)%2 === 0) {
      moveBox = <div className='move-box black-move'> {move} </div>
    } else {
      moveBox = <div className='move-box white-move'> {move} </div>
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