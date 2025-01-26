export function isNumber(N) {
  // check if a character is a digit
  return (N >= '0' && N <= '9');
}

export function isLetter(L) {
  // check if a character is a letter
  return ((L >= 'a' && L <= 'z') || (L >= 'A' && L <= 'Z'));
}

export function isBlack(L) {
  // check if piece letter is lower case (black)
  if (L === L.toLowerCase()) {
    return true;
  }
}

export function isWhite(L) {
  // check if piece letter is upper case (white)
  if (L === L.toUpperCase()) {
    return true;
  }
}

export function fenTo2D(fen) {
  // convert fen to 2D array of pieces
  let board2D = Array(8).fill().map(() => Array(8).fill(0));
  const board1D = fen.split(' ')[0];
  const boardRows = board1D.split('/');

  boardRows.forEach((rowPieces,rIndex) => {
    let cIndex = -1;
    [...rowPieces].forEach(rowPiece => {
      if (!isNumber(rowPiece)) {
        cIndex += 1
        board2D[rIndex][cIndex] = rowPiece;
      } else {
        cIndex += Number(rowPiece);
      }
    });
  });

  return board2D
}

export function numbersToLetters(xy) {
  const x = xy[0];
  const y = xy[1];
  let coordinates;

  switch(x) {
    case '0':
      coordinates = 'a';
      break;
    case '1':
      coordinates = 'b';
      break;
    case '2':
      coordinates = 'c';
      break;
    case '3':
      coordinates = 'd';
      break;
    case '4':
      coordinates = 'e';
      break;
    case '5':
      coordinates = 'f';
      break;
    case '6':
      coordinates = 'g';
      break;
    default:
      coordinates = 'h';
      break;
  }

  switch(y) {
    case '0':
      coordinates += '8';
      break;
    case '1':
      coordinates += '7';
      break;
    case '2':
      coordinates += '6';
      break;
    case '3':
      coordinates += '5';
      break;
    case '4':
      coordinates += '4';
      break;
    case '5':
      coordinates += '3';
      break;
    case '6':
      coordinates += '2';
      break;
    default:
      coordinates += '1';
      break;
  }

  return coordinates;
}

export function lettersToNumbers(cr) {

  const c = cr[0];
  const r = cr[1];
  let coordinates;

  switch(c) {
    case 'a':
      coordinates = '0';
      break;
    case 'b':
      coordinates = '1';
      break;
    case 'c':
      coordinates = '2';
      break;
    case 'd':
      coordinates = '3';
      break;
    case 'e':
      coordinates = '4';
      break;
    case 'f':
      coordinates = '5';
      break;
    case 'g':
      coordinates = '6';
      break;
    default:
      coordinates = '7';
      break;
  }

  switch(r) {
    case '1':
      coordinates += '7';
      break;
    case '2':
      coordinates += '6';
      break;
    case '3':
      coordinates += '5';
      break;
    case '4':
      coordinates += '4';
      break;
    case '5':
      coordinates += '3';
      break;
    case '6':
      coordinates += '2';
      break;
    case '7':
      coordinates += '1';
      break;
    default:
      coordinates += '0';
      break;
  }

  return coordinates;
}