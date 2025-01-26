import P from './assets/wP.svg'
import R from './assets/wR.svg'
import N from './assets/wN.svg'
import B from './assets/wB.svg'
import Q from './assets/wQ.svg'
import K from './assets/wK.svg'
import p from './assets/bP.svg'
import r from './assets/bR.svg'
import n from './assets/bN.svg'
import b from './assets/bB.svg'
import q from './assets/bQ.svg'
import k from './assets/bK.svg'
import { textSquares,textElements } from "./data/specialSquares.jsx"


export default function FullSquare({xy,sqrColor,playColor,pieceColor,fenChar,sqrsState,onClickPiece,onClickMove}) {

  let imgElement;
  switch(fenChar) {
    case 'p':
      imgElement = <img src={p} alt={fenChar} className='piece'></img>
      break;
    case 'r':
      imgElement = <img src={r} alt={fenChar} className='piece'></img>
      break;
    case 'n':
      imgElement = <img src={n} alt={fenChar} className='piece'></img>
      break;
    case 'b':
      imgElement = <img src={b} alt={fenChar} className='piece'></img>
      break;
    case 'q':
      imgElement = <img src={q} alt={fenChar} className='piece'></img>
      break;
    case 'k':
      imgElement = <img src={k} alt={fenChar} className='piece'></img>
      break;
    case 'P':
      imgElement = <img src={P} alt={fenChar} className='piece'></img>
      break;
    case 'R':
      imgElement = <img src={R} alt={fenChar} className='piece'></img>
      break;
    case 'N':
      imgElement = <img src={N} alt={fenChar} className='piece'></img>
      break;
    case 'B':
      imgElement = <img src={B} alt={fenChar} className='piece'></img>
      break;
    case 'Q':
      imgElement = <img src={Q} alt={fenChar} className='piece'></img>
      break;
    case 'K':
      imgElement = <img src={K} alt={fenChar} className='piece'></img>
      break;
  }

  let legalClass = '';
  if (sqrsState[Number(xy[1])][Number(xy[0])] === 1) {
    legalClass = ` js-${sqrColor}-clicked`
  } else if (sqrsState[Number(xy[1])][Number(xy[0])] === 3) {
    legalClass = ` js-${sqrColor}-legal-capture`
  }

  let fullSquareElement;

  if (textSquares.includes(xy)) {
    const i = textSquares.indexOf(xy);

    if (playColor === pieceColor) {
      fullSquareElement = (
        <div className={sqrColor + ' js-sqr-'+xy + legalClass} onClick={onClickPiece}>
          {imgElement}
          {textElements[i]}
        </div>
      )
    } else {
      if (legalClass) {
        fullSquareElement = (
          <div className={sqrColor + ' js-sqr-'+xy + legalClass} onClick={onClickMove}>
            {imgElement}
            {textElements[i]}
          </div>
        )
      } else {
        fullSquareElement = (
          <div className={sqrColor + ' js-sqr-'+xy + legalClass}>
            {imgElement}
            {textElements[i]}
          </div>
        )
      }
    }

  } else {

    if (playColor === pieceColor) {
      fullSquareElement = (
        <div className={sqrColor + ' js-sqr-'+xy + legalClass} onClick={onClickPiece}>
          {imgElement}
        </div>
      )
    } else {
      if (legalClass) {
        fullSquareElement = (
          <div className={sqrColor + ' js-sqr-'+xy + legalClass} onClick={onClickMove}>
            {imgElement}
          </div>
        )
      } else {
        fullSquareElement = (
          <div className={sqrColor + ' js-sqr-'+xy + legalClass}>
            {imgElement}
          </div>
        )
      }
    }

  }


  return fullSquareElement
}