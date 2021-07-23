// Codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

var perimetroCuadrado = lado => lado * 4; //+ "cm"
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

var areaCuadrado = lado => lado ** 2; //+ "cm²"
//console.log("El area del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");

//const alturaTriangulo = Math.sqrt(6 ** 2 - (baseTriangulo / 2)** 2);
// console.log(`La altura del triangulo es: ${Math.round(alturaTriangulo * 10) / 10}cm`);

var perimetroTriangulo = (lado1,lado2,base) => lado1 + lado2 + base;
//console.log(`El perimetro del trriangulo es: ${perimetroTriangulo}cm`);

var areaTriangulo = (base, altura) => (base * altura) / 2;
//console.log(`El area del trriangulo es: ${Math.round(areaTriangulo * 10) / 10}cm²`);

console.groupEnd();


// Codigo del circulo 
console.group("Circulo");

//Radio
//const radioCirculo = 4; 
//console.log(`El radio del circulo es: ${radioCirculo}cm`);

//Diametro
var diametroCirculo = radio => radio * 2;

//PI
const PI = Math.PI;

//Circunferencia
var perimetroCirculo = radio => Math.round(diametroCirculo(radio) * PI * 10) / 10;

//Area
var areaCirculo = radio => Math.round((radio ** 2) * PI * 10) / 10;

console.groupEnd();


//Interaccion con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}