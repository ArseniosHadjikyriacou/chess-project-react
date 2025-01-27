import { Chess } from "chess.js";

// Create a function for sending requests:
async function postChessApi(data = {}) {
  const response = await fetch("https://chess-api.com/v1", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
  });
  return response.json();
}

export default function generateComputerMove(fen,setFen,setMoves,setSqrsState) {
  // note: online API does not accept en-passant information in fes format :(
  postChessApi({ fen: fen.history[fen.moveNumber] }).then((data) => {

    const chess = new Chess();
    chess.load(fen.history[fen.moveNumber]);
    chess.move(data.san)

    let compMoveSan;
    if ((fen.moveNumber+1)%2 === 0) {
      compMoveSan = data.san;
    } else {
      compMoveSan = String( Math.ceil((fen.moveNumber+1)/2) ) + '. ' + data.san
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
        return { history: [...prevMoves.history,compMoveSan], moveNumber: prevMoves.moveNumber+1 }
      } else {
        return { history: [...prevMoves.history.slice(0, -mismatch),compMoveSan], moveNumber: prevMoves.moveNumber+1 }
      }
    });

    setSqrsState( Array(8).fill().map(() => Array(8).fill(0)) );

  });
  
}
