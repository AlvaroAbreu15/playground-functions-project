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
function footballPoints(vitorias, empates) {
 let pontosVitorias = vitorias * 3;
 let pontosEmpates = empates * 1;
 let soma = pontosVitorias + pontosEmpates;
 return soma;
}

// Desafio 6
function highestCount(array) {
   let maiorNumero = array[0];
   let count = 0;
  for (let i = 0; i < array.length ; i += 1){
    if (array[i] > maiorNumero){
      maiorNumero = array[i];
    }
  }
  for (let index = 0; index < array.length ; index += 1){
    if (maiorNumero === array[index]){
       count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let sub1 =  Math.abs(cat1 - mouse) ;
  let sub2 =  Math.abs(cat2 - mouse) ;
  if (sub1 > sub2){
    return ('cat2');
  } else if (sub1 < sub2){
    return ('cat1');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}
console.log(catAndMouse(5, 9, 3));

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
