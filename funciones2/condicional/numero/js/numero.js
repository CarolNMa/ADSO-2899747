/**
 * Operaciones aritmeticas aplicando funciones como una expresión
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */

function numeros(pnumero,pnumero2){
    let num=pnumero;
    let num2=pnumero2;
    let result;

    if (num==num2) {
        result="Son iguales";
        
    }else if(num>num2){
        result="Es mayor";
    }else{
        result="Es menor";
    }
    return result
}

//Como expresión 

const numerosExp=function(pnumero,pnumero2){
    let num=pnumero;
    let num2=pnumero2;
    let result;

    if (num==num2) {
        result="Son iguales";
        
    }else if(num>num2){
        result="Es mayor";
    }else{
        result="Es menor";
    }
    return result
}