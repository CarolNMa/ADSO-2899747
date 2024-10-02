/**
 * Contar numeros
* autor: Carol M
 * fecha: Lunes 15 de abril de 2024
 */

function contarNumeros(pnumeros) {
    let contador = 0;
    let numeros = pnumeros
    while (contador < numeros) {
        contador= contador+1;
        console.log(contador);
    }
    return contador;
}

/**Como expresion */

const contarNumexp= function(pnumeros){
    let contador = 0;
    let numeros = pnumeros;

    while (contador < numeros){
        contador= contador+1;
        console.log(contador);
    }
    return contador;
}