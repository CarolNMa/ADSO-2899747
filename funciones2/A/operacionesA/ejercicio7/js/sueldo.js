/**
 * Función de calcular el sueldo
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function sueldo(pdiasTrabajados,pvalorDia){
    let diasTrabajados=pdiasTrabajados;
    let valorDia=pvalorDia;
    let salud, pension, arl, descuento, pagoTotal;

    salario=diasTrabajados*valorDia;
    salud=salario*0.12;
    pension=salario*0.16;
    arl=salario*0.052;
    descuento=salud+pension+arl;
    pagoTotal= salario-descuento;

    console.log("El descuento de salud es: "+salud+"\n");
    console.log("El descuento de la pension es: "+pension+"\n");
    console.log("El descuento de arl es: "+arl+"\n");
    return "Su salario es: "+pagoTotal
}

const sueldoExp=function(pdiasTrabajados,pvalorDia){
    let diasTrabajados=pdiasTrabajados;
    let valorDia=pvalorDia;
    let salud, pension, arl, descuento, pagoTotal;

    salario=diasTrabajados*valorDia;
    salud=salario*0.12;
    pension=salario*0.16;
    arl=salario*0.052;
    descuento=salud+pension+arl;
    pagoTotal= salario-descuento;

    console.log("El descuento de salud es: "+salud+"\n");
    console.log("El descuento de la pension es: "+pension+"\n");
    console.log("El descuento de arl es: "+arl+"\n");
    return "Su salario es: "+ pagoTotal+" Expresión"
}