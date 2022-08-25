// Desafio 11
function generatePhoneNumber(array) {
let count = 0;
let valor = array[0];
if (array.length > 11 || array.length < 11) {
  return 'Array com tamanho incorreto.';
}
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumA = lineA + lineB; // c
  let sumB = lineA + lineC; // b
  let sumC = lineB + lineC  // a
  
  let subA = Math.abs(lineA - lineB);
  let subB = Math.abs(lineA - lineC);
  let subC = Math.abs(lineB - lineC);

  if (lineA < sumC && lineB < sumB && lineC < sumA && lineA > subC && lineB > subB && lineC > subA){
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
