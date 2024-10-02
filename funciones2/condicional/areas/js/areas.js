/**
 * Area de 3 cuadrados
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */

function calculoArea(lado) {

    let total=lado*lado;
    return total;
}

function cicloCuadrados(cuad1, cuad2, cuad3) {
    if (cuad1 === cuad2 && cuad2 === cuad3) {
        console.log("Los 3 cuadrados son iguales");
    } else if (cuad1 > cuad2 && cuad1 > cuad3) {
        console.log("El cuadrado 1 es mayor");
    } else if (cuad3 > cuad2) {
        console.log("El cuadrado 3 es mayor");
    } else {
        console.log("El cuadrado 2 es mayor");
    }
}

function areas(plado, plado2, plado3) {
    let lado1 = plado;
    let lado2 = plado2;
    let lado3 = plado3;

    let cuad1 = calculoArea(lado1);
    let cuad2 = calculoArea(lado2);
    let cuad3 = calculoArea(lado3);

    let result = cicloCuadrados(cuad1, cuad2, cuad3);

    return result;
 
}



/**
 * Como expresion
 */

const calculoareaExp = function(lado) {
    let total=lado*lado;
    return total;
}

const ciclocuadradosExp =function(cuad1, cuad2, cuad3) {
    if (cuad1 === cuad2 && cuad2 === cuad3) {
        console.log("Los 3 cuadrados son iguales");
    } else if (cuad1 > cuad2 && cuad1 > cuad3) {
        console.log("El cuadrado 1 es mayor");
    } else if (cuad3 > cuad2) {
        console.log("El cuadrado 3 es mayor");
    } else {
        console.log("El cuadrado 2 es mayor");
    }
}

const areasExp=function(plado, plado2, plado3) {
    let lado1 = plado;
    let lado2 = plado2;
    let lado3 = plado3;

    let cuad1 = calculoareaExp(lado1);
    let cuad2 = calculoareaExp(lado2);
    let cuad3 = calculoareaExp(lado3);

    let result = ciclocuadradosExp(cuad1, cuad2, cuad3);

    return result;
 
}
