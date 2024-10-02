/**
 * Operaciones aritmeticas aplicando funciones como una expresión
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */

function edades(pedad){

    let edad=pedad;

    if(edad>=18){
        edad="ES MAYOR DE EDAD";
    }else {
        edad="ES MENOR DE EDAD";
    }
    return edad;
}

/**Como expresion */

const edadesExp= function(pedad){

    let edad=pedad;

    if(edad>=18){
        edad="ES MAYOR DE EDAD";
    }else {
        edad="ES MENOR DE EDAD";
    }
    return edad;
}