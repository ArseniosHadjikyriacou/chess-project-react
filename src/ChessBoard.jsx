import { Chess } from 'chess.js'
import Square from './Square.jsx'
import { fenTo2D,numbersToLetters,lettersToNumbers } from './utils/fenNotation.js'
import indexOf2D from './utils/indexOf2D.js'
import './styles/ChessBoard.css'

export default function ChessBoard({fen,sqrsState,setFen,setMoves,setSqrsState}) {

  const playColor = fen.history[fen.moveNumber].split(' ')[1];
  const board2D = fenTo2D(fen.history[fen.moveNumber]);

  function handleClickPiece(xy,board) {


    if (sqrsState[Number(xy[1])][Number(xy[0])] === 1) {

      setSqrsState(Array(8).fill().map(() => Array(8).fill(0)));

    } else {

      const chess = new Chess();
      chess.load(fen.history[fen.moveNumber]);
      const legalMoves = chess.moves({ square: numbersToLetters(xy), verbose: true }).map(move => lettersToNumbers(move.to));

      setSqrsState(prev => {
        let state = Array(8).fill().map(() => Array(8).fill(0));
        state[Number(xy[1])][Number(xy[0])] = 1; // clicked piece state

        legalMoves.forEach(move => {
          if (board[Number(move[1])][Number(move[0])]) {
            state[Number(move[1])][Number(move[0])] = 3; // captured piece state
          } else {
            state[Number(move[1])][Number(move[0])] = 2; // free square state
          }
        });

        return state;
      });

    }

  
  }

  function handleClickMove(xy,board) {
    const chess = new Chess();
    chess.load(fen.history[fen.moveNumber]);

    const sqrInitialNum = indexOf2D(sqrsState,1);
    const sqrInitialAlg = numbersToLetters(sqrInitialNum);
    const sqrFinalNum = xy;
    const sqrFinalAlg = numbersToLetters(sqrFinalNum);
    const pieceToMove = board[Number(sqrInitialNum[1])][Number(sqrInitialNum[0])]

    let newMoveObject;
    if (pieceToMove.toLowerCase() === 'p' && (sqrFinalNum[1] === '0' || sqrFinalNum[1] === '7')) {
      newMoveObject = chess.move({ from: sqrInitialAlg, to: sqrFinalAlg, promotion: 'q' });
    } else {
      newMoveObject = chess.move({ from: sqrInitialAlg, to: sqrFinalAlg });
    }

    let newMoveSan;
    if ((fen.moveNumber+1)%2 === 0) {
      newMoveSan = newMoveObject.san;
    } else {
      newMoveSan = String( Math.ceil((fen.moveNumber+1)/2) ) + '. ' + newMoveObject.san;
    }

    setFen(prevFen => {
      const mismatch = prevFen.history.length - (prevFen.moveNumber+1)
      if (mismatch === 0) {
        return { history: [...prevFen.history,chess.fen()], moveNumber: prevFen.moveNumber+1 }
      } else {
        return { history: [...prevFen.history.slice(0, -mismatch),chess.fen()], moveNumber: prevFen.moveNumber+1 }
      }
    });

    setMoves(prevMoves => {
      const mismatch = prevMoves.history.length - prevMoves.moveNumber
      if (mismatch === 0) {
        return { history: [...prevMoves.history,newMoveSan], moveNumber: prevMoves.moveNumber+1 }
      } else {
        return { history: [...prevMoves.history.slice(0, -mismatch),newMoveSan], moveNumber: prevMoves.moveNumber+1 }
      }
    });

    setSqrsState( Array(8).fill().map(() => Array(8).fill(0)) );

  }

  function generateSquares(board) {
    let sqrElements = [];

    for (let y = 0; y <= 7; y++) {
      if (y % 2 === 0) {
        for (let x = 0; x <= 7; x++) {
          const stringXY = String(x)+String(y);
          if (x % 2 === 0) {
            sqrElements.push(<Square xy={stringXY} sqrColor={'sqrw'} playColor={playColor} fenChar={board[y][x]} sqrsState={sqrsState} 
            onClickPiece={() => handleClickPiece(stringXY,board)} onClickMove={() => handleClickMove(stringXY,board)} key={stringXY} />);
          } else {
            sqrElements.push(<Square xy={stringXY} sqrColor={'sqrb'} playColor={playColor} fenChar={board[y][x]} sqrsState={sqrsState} 
            onClickPiece={() => handleClickPiece(stringXY,board)} onClickMove={() => handleClickMove(stringXY,board)} key={stringXY} />);
          }
        }
      } else {
        for (let x = 0; x <= 7; x++) {
          const stringXY = String(x)+String(y);
          if (x % 2 === 0) {
            sqrElements.push(<Square xy={stringXY} sqrColor={'sqrb'} playColor={playColor} fenChar={board[y][x]} sqrsState={sqrsState} 
            onClickPiece={() => handleClickPiece(stringXY,board)} onClickMove={() => handleClickMove(stringXY,board)} key={stringXY} />);
          } else {
            sqrElements.push(<Square xy={stringXY} sqrColor={'sqrw'} playColor={playColor} fenChar={board[y][x]} sqrsState={sqrsState} 
            onClickPiece={() => handleClickPiece(stringXY,board)} onClickMove={() => handleClickMove(stringXY,board)} key={stringXY} />);
          }
        }
      }
    }
    
    return sqrElements
  }

  return (
    <div className='board-container'>

      <div className='board-grid'>
        {generateSquares(board2D)}
      </div>

    </div>
  )
}

