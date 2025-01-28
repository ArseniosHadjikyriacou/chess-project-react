import { textSquares,textElements } from "../data/specialSquares.jsx"

export default function EmptySquare({xy,sqrColor,sqrsState,onClickMove}) {

  if (textSquares.includes(xy)) {
    const i = textSquares.indexOf(xy);

    if (sqrsState[Number(xy[1])][Number(xy[0])]) {
      return (
        <div className={sqrColor + ' js-sqr-'+xy + ` js-${sqrColor}-legal`} onClick={onClickMove}>
          {textElements[i]}
        </div>
      )
    } else {
      return (
        <div className={sqrColor+' '+'js-sqr-'+xy}>
          {textElements[i]}
        </div>
      )
    }

  } else {
    if (sqrsState[Number(xy[1])][Number(xy[0])]) {
      return <div className={sqrColor + ' js-sqr-'+xy + ` js-${sqrColor}-legal`} onClick={onClickMove}></div>
    } else {
      return <div className={sqrColor+' '+'js-sqr-'+xy}></div>
    }
  }
 
}