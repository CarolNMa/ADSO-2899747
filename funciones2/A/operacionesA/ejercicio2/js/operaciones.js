/**
 * Función de operciones aritméticas
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */
function sumar(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    let suma

    suma = num1 + num2
    return suma
}

function restar(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    let resta;

    resta = num1 - num2
    return resta
}

function multiplicar(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    let multi

    multi = num1 * num2
    return multi
}

function dividir(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    let divi

    divi = num1 / num2
    return divi
}

const operacionesExp=function(operacion,pnum1,pnum2){
let ope=operacion;
if(ope=="suma"||ope=="+"){ 
    let num1=pnum1;
    let num2=pnum2;
    let suma;

    suma = num1 + num2;
    return suma + " Expresión";
}else if(ope=="resta"||ope=="-"){
    let num1=pnum1;
    let num2=pnum2;
    let resta ;

    resta = num1 - num2
    return resta+ " Expresión"
}else if(ope=="multiplicacion"||ope=="x"){
    let num1=pnum1;
    let num2=pnum2;
    let multi

    multi = num1 * num2
    return multi + " Expresión"
}else if(ope=="division"||ope=="/"){
    let num1=pnum1;
    let num2=pnum2;
    let divi

    divi = num1 / num2
    return divi + " Expresión"
}else{
    return "No existe el operador"
}
}

