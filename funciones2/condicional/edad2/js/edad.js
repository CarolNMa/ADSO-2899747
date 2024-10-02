/**
 * Operaciones aritmeticas aplicando funciones como una expresión
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */

function edades(anioAct, anioNac){
    let edad= anioAct- anioNac;

    if(edad>17){
        console.log("Es mayor de edad");
    }else {
        console.log("Es menor de edad");
    }
    return edad;
}

/**
 * Como expresion 
 */


const edadesExp=function(anioAct, anioNac){
    let edad= anioAct - anioNac;

    if(edad>17){
        console.log("Es mayor de edad");
    }else {
        console.log("Es menor de edad");
    }
    return edad;
}