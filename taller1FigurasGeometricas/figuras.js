// Codigo del cuadrado
console.group("Cuadrado");

var perimetroCuadrado = lado => lado * 4;

var areaCuadrado = lado => lado ** 2;

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

var perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

var areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();


// Codigo del circulo 
console.group("Circulo");

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

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const output = document.getElementById("outputCuadrado");
    output.textContent = perimetro;
};
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    const output = document.getElementById("outputCuadrado");
    output.textContent = area;
};

//Triangulo

function calcularPerimetroTriangulo() {
    const inputA = document.getElementById("inputTrianguloLadoA");
    const valueA = Number(inputA.value);
    const inputB = document.getElementById("inputTrianguloLadoB");
    const valueB = Number(inputB.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);

    const output = document.getElementById("outputTriangulo");
    output.textContent = perimetro;

};

function calcularAreaTriangulo() {

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);
    
    const area = areaTriangulo(valueBase, valueAltura);

    const output = document.getElementById("outputTriangulo");
    output.textContent = area;
};

// Circulo

function calcularPerimetroCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const value = Number(inputCirculo.value);

    const perimetro = perimetroCirculo(value);

    const output = document.getElementById("outputCirculo");
    output.textContent = perimetro;
};

function calcularAreaCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const value = Number(inputCirculo.value);

    const area = areaCirculo(value);

    const output = document.getElementById("outputCirculo");
    output.textContent = area;
};