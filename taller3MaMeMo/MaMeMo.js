// funcion Ma

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  
  const promedioLista = sumaLista / lista.length;
  
  return promedioLista;
}

// Funcion Me

function compareNumbers(a, b) {
  return a - b;
}

function esPar(number) {
  if (number % 2 === 0) {
    return true;
  }
  else {
    return false;
  } 
}

let mediana;

function calcularMediana(lista) {
  const listaOrdenada = lista.sort(compareNumbers);

  const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);

  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadListaOrdenada - 1];
    const elemento2 = listaOrdenada[mitadListaOrdenada];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2
    ]);
    mediana = promedioElemento1y2;
    return mediana;
  }
  else {
    mediana = listaOrdenada[mitadListaOrdenada];
    return mediana;
  }
};

// Funcion Mo 
// Esta funcion tiene una mala performance, ya que lee demaciadas veces los array . Lo conveniente es usarla pero no en condiciondes en donde la eficiencia sea clave
// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }


// console.log(mode(NUMBERS));
//Otra funcion para calcular moda con mejor performance


function calcularModa(lista) {
  const listaC = {};
  lista.map(
    function (elemento) {
      if (listaC[elemento]) {
        listaC[elemento] += 1;
      } else {
        listaC[elemento] = 1;
      }
    }
  );

  const listaArray = Object.entries(listaC).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );

  const moda = listaArray[listaArray.length - 1];

  return moda;
}

// Interacion con HTML
function stringToArray(a){
  return a.split(" ").map(Number);
}
// Implementacion media aritmetica

function onclickCalcularMediaAritmetica() {
  const input = document.getElementById("inputMa");
  const listaInput = input.value;
  const listaInputArray = stringToArray(listaInput);

  const Ma = calcularMediaAritmetica(listaInputArray);

  const output = document.getElementById("outputMa");
  output.innerText = Ma;
}

// Implementacion mediana

function onclickCalcularMediana() {
  const input = document.getElementById("inputMe");
  const listaInput = input.value;
  const listaInputArray = stringToArray(listaInput);

  const Me = calcularMediana(listaInputArray);

  const output = document.getElementById("outputMe");
  output.innerText = Me;
}

// Implementacion moda

function onclickCalcularModa() {
  const input = document.getElementById("inputMo");
  const listaInput = input.value;
  const listaInputArray = stringToArray(listaInput);

  const Mo = calcularModa(listaInputArray);

  const output = document.getElementById("outputMo");
  output.innerText = Mo[0];
  console.log(Mo)
}