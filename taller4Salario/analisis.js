const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColOdenados = salariosCol.sort((a,b) => a - b);

// function esPar(number) {
//     if (number % 2 === 0) {
//       return true;
//     }
//     else {
//       return false;
//     } 
//   }

//otra manera mas corta de hacer una funcion que reconozca numeros pares:
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
};

function esPar(n) {
  return (n % 2 === 0);
};

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana;
    }
    else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColOdenados);

//Calcular el top 10% de salarios

const spliceStart = (salariosColOdenados.length * 90) / 100;
const spliceCount = salariosColOdenados.length - spliceStart;

const salariosColTop10 = salariosColOdenados.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
})