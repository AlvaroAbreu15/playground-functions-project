// Desafio 1
function compareTrue(hexa, plano) {

  if (hexa === true && plano === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
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
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let sub1 = Math.abs(cat1 - mouse);
  let sub2 = Math.abs(cat2 - mouse);
  if (sub1 > sub2) {
    return ('cat2');
  } else if (sub1 < sub2) {
    return ('cat1');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}


// Desafio 8
function fizzBuzz(array) {

  let arrayFinal = [];
  for (let i = 0; i < array.length; i += 1) {

    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      arrayFinal.push('fizz');
    }
    else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      arrayFinal.push('buzz');
    }
    else if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      arrayFinal.push('fizzBuzz');
    }
    else {
      arrayFinal.push('bug!');
    }
  }
  return arrayFinal;
}

// Desafio 9
function encode(string) {
  let stringFinal = string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);

  return stringFinal;
}

function decode(string) {
  let novaString = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');

  return novaString;
}


// Desafio 10
function techList(array, name) {
let arrayOrdenado = array.sort();
let object = [];
if (array.length !== 0){
  for(let i = 0 ; i < arrayOrdenado.length ; i += 1){
    let ordenado ={
    tech: arrayOrdenado[i],
    name: name
    };
    object.push(ordenado);
  }
}
else if(array.length === 0){
  return 'Vazio!';
}
return object;
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
