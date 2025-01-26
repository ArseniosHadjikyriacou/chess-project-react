export default function indexOf2D(array,value) {
  for ( let i=0; i<=7; i++ ) {
    if (array[i].indexOf(value) != -1) {
      return ( String(array[i].indexOf(value)) + String(i) )
    }
  }
}