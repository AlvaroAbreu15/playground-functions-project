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


// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
 
  let result = string.match(reg);
  let sum = 0;
  if (result.length > 1) {
    for (let i = 0; i < result.length ; i += 1){
      let num = parseInt(result[i]);
      sum = sum + num;
    }
    return (sum + ' copos de água');
  }
  else {
    let num1 = parseInt(result[0]);
    return (num1 + ' copo de água');
  }
}
console.log(hydrate('4 caipirinhas e 2 cervejas'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
