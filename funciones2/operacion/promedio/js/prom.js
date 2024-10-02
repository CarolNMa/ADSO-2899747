/**
 * Operaciones aritmeticas aplicando funciones como una expresión
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */

function sumarNumeros(num1, num2, num3) {
    let sumas = num1 + num2 + num3
    return sumas;
}

function promedio(num1, num2, num3) {
    let suma = sumarNumeros(num1, num2, num3);
    let resultado = suma/3;
    return resultado;
}

/**
 * Como Expresión 
 */

const sumarNumerosexp = function(num1, num2, num3) {
    let sumas = num1 + num2 + num3
    return sumas;
}

const  promedioExp = function(num1, num2, num3) {
    let suma = sumarNumerosexp(num1, num2, num3);
    let resultado = suma/3;
    return resultado;
}