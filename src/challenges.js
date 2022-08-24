// Desafio 1
function compareTrue(hexa, plano) {

  if (hexa === true && plano === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2 ;
  return area;
}
 
// Desafio 3
function splitSentence(string) {
  const splits = string.split(' ');
  return splits;
}

// Desafio 4
function concatName(array) {
  let primeiroItem = array[0];
  let indice = array.length - 1;
  let ultimoItem = array[indice];

  return (ultimoItem + ', ' + primeiroItem);  
}


// Desafio 5
function footballPoints() {
  
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
