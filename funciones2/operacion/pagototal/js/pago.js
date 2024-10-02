/**
 * Operaciones aritmeticas aplicando funciones como una expresión
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */

function salarioP(pdiastrbajados,pvalordia){
    let diasTraba=pdiastrbajados;
    let valorDia=pvalordia;
    let totalSalario=diasTraba*valorDia;
    
    return totalSalario
}

function saludp(pdiastrbajados,pvalordia){
    let pagoSalud=salarioP(pdiastrbajados,pvalordia)*0.12;
        
    return pagoSalud;
}
function pensionp(pdiastrbajados,pvalordia){
    let pagoPension=salarioP(pdiastrbajados,pvalordia)*0.16;
    
    return pagoPension;
}

function arlL(pdiastrbajados,pvalordia){
    let arlP= salarioP(pdiastrbajados,pvalordia)*0.052;

    return arlP;
}

function descuento(pdiastrbajados,pvalordia){
    let pagoDeducible= saludp(pdiastrbajados,pvalordia)+pensionp(pdiastrbajados,pvalordia)+arlP(pdiastrbajados,pvalordia);
    return pagoDeducible;
}

function pagoTotal(pdiastrbajados, pvalordia){
    let pagoTotall=salarioP(pdiastrbajados,pvalordia)-descuento(pdiastrbajados,pvalordia);
    return pagoTotall
}



/**
 * Como expresión
 */

const salarioPexp = function(pdiastrbajados,pvalordia){
    let diasTraba=pdiastrbajados;
    let valorDia=pvalordia;
    let totalSalario=diasTraba*valorDia;
    
    return totalSalario
}

const saludpExp = function(pdiastrbajados,pvalordia){
    let pagoSalud=salarioPexp(pdiastrbajados,pvalordia)*0.12;
        
    return pagoSalud;
}
const pensionpExp= function(pdiastrbajados,pvalordia){
    let pagoPension=salarioPexp(pdiastrbajados,pvalordia)*0.16;
    
    return pagoPension;
}

const arlLExp= function(pdiastrbajados,pvalordia){
    let arlP= salarioPexp(pdiastrbajados,pvalordia)*0.052;

    return arlP;
}

const descuentoExp = function(pdiastrbajados,pvalordia){
    let pagoDeducible= saludpExp(pdiastrbajados,pvalordia)+pensionpExp(pdiastrbajados,pvalordia)+arlLExp(pdiastrbajados,pvalordia);
    return pagoDeducible;
}

const pagoTotalexp = function(pdiastrbajados, pvalordia){
    let pagoTotall=salarioPexp(pdiastrbajados,pvalordia)-descuentoExp(pdiastrbajados,pvalordia);
    return pagoTotall
}
