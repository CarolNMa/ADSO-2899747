/**
 * Operaciones aritmeticas aplicando funciones como una expresión
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */

function porcentaje(pnota, pporcentaje){

    let nota = pnota;
    let porcen = pporcentaje;
    let result;
    
    result = nota*porcen;

    return result;
}


/** Como Expresión */

const porcentajeExp = function(pnota, pporcentaje){

    let notaEx = pnota;
    let porcenEx = pporcentaje;
    let result;
    
    result = notaEx*porcenEx;

    return result;
}
