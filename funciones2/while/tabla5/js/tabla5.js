/**
 * Tabla de multiplicar del 5
* autor: Carol M
 * fecha: Lunes 15 de abril de 2024
 */

function tablaMulti(pnumero){
    let contar = 0;
    let numero = pnumero;

    while (contar<numero){
        
        contar=contar+1;
        let product= contar * numero;
        console.log(numero + " * " + contar + " = " + product);

    }
    return "Fin de la tabla";
}

/**Como expresion */

const tablaMultiexp = function(pnumero){
    let contar = 0;
    let numero = pnumero;
    while (contar<numero){
        
        contar=contar+1;
        let product= contar * numero;
        console.log(numero + " * " + contar + " = " + product);
    }
    return "Fin de la tabla";
} 