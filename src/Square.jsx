import FullSquare from './FullSquare';
import EmptySquare from './EmptySquare';
import './styles/Square.css'

export default function Square({xy,sqrColor,playColor,fenChar,sqrsState,onClickPiece,onClickMove}) {

  let squareType;
  let pieceColor;

  if (fenChar) {
    (fenChar === fenChar.toLowerCase()) ? pieceColor = 'b' : pieceColor = 'w';
    squareType = <FullSquare xy={xy} sqrColor={sqrColor} playColor={playColor} pieceColor={pieceColor} 
    fenChar={fenChar} sqrsState={sqrsState} onClickPiece={onClickPiece} onClickMove={onClickMove} />
  } else {
    squareType = <EmptySquare xy={xy} sqrColor={sqrColor} sqrsState={sqrsState} onClickMove={onClickMove} />
  }

  return squareType
}