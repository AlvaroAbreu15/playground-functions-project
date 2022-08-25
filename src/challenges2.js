// Desafio 11
function generatePhoneNumber(array) {
let count = 0;
let valor = array[0];
if (array.length > 11 || array.length < 11) {
  return 'Array com tamanho incorreto.';
}
  
   for(let i = 0; i < array.length ; i += 1)
}
console.log(generatePhoneNumber('8599108373'));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
