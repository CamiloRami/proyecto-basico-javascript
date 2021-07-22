// Codigo del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El area del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");

const alturaTriangulo = Math.sqrt(6 ** 2 - (baseTriangulo / 2)** 2);
console.log(`La altura del triangulo es: ${Math.round(alturaTriangulo * 10) / 10}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del trriangulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del trriangulo es: ${Math.round(areaTriangulo * 10) / 10}cm²`);

console.groupEnd();


// Codigo del circulo 
console.group("Circulo");

//Radio
const radioCirculo = 4; 
console.log(`El radio del circulo es: ${radioCirculo}cm`);

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo}cm`);

//PI
const PI = Math.PI;

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del circulo es: ${Math.round(perimetroCirculo * 10) / 10}cm`);

//Area
const areaCirculo = (radioCirculo ** 2) * PI;
console.log(`El area del circulo es: ${Math.round(areaCirculo * 10) / 10}cm²`);

console.groupEnd();