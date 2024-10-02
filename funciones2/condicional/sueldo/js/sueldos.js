function salarioP(pdias,pVdia){
    let dias=pdias;
    let vdia=pVdia;
    let totalSalario=dias*vdia;
    
    return totalSalario
}

function subTrans(pdias,pVdia){
    let salarioMinimo=1600000;
    let salarioTransp=salario(pdias,pVdia);
    let subTranspo;
    
    if (salarioTransp <=2*salarioMinimo) {
        
        subTranspo=11400;
    }else {
        subTranspo=0;
    }
    return subTranspo;
}

function saludp(pdias,pVdia){
    let pagoSalud=salario(pdias,pVdia)*0.12;
        
    return pagoSalud;
}

function pensionp(pdias,pVdia){
    let pagoPension=salario(pdias,pVdia)*0.16;
    
    return pagoPension;
}

function arlL(pdias,pVdia){
    let arlP= salario(pdias,pVdia)*0.052;

    return arlP;
}

function deducible(pdias,pVdia){
    let pagoDeducible= salud(pdias,pVdia)+pension(pdias,pVdia)+arl(pdias,pVdia);
    return pagoDeducible;
}

function pagoTotal(pdias,pVdia){
    let pagoSueldo= salario(pdias,pVdia)+subTransp(pdias,pVdia)- deducible(pdias,pVdia);

    return pagoSueldo;
}



/**COMO EXPRESION */

const salario = function(pdias,pVdia){
    let dias=pdias;
    let vdia=pVdia;
    let totalSalario=dias*vdia;
    
    return totalSalario
}

const subTransp = function(pdias,pVdia){
    let salarioMinimo=1600000;
    let salarioTransp=salario(pdias,pVdia);
    let subTranspo;
    
    if (salarioTransp <=2*salarioMinimo) {
        
        subTranspo=11400;
    }else {
        subTranspo=0;
    }
    return subTranspo;
}

const salud = function(pdias,pVdia){
    let pagoSalud=salario(pdias,pVdia)*0.12;
        
    return pagoSalud;
}

const pension = function(pdias,pVdia){
    let pagoPension=salario(pdias,pVdia)*0.16;
    
    return pagoPension;
}

const arl = function(pdias,pVdia){
    let arlP= salario(pdias,pVdia)*0.052;

    return arlP;
}

const deduciblep = function(pdias,pVdia){
    let pagoDeducible= salud(pdias,pVdia)+pension(pdias,pVdia)+arl(pdias,pVdia);
    return pagoDeducible;
}

const pagoTotalp = function(pdias,pVdia){
    let pagoSueldo= salario(pdias,pVdia)+subTransp(pdias,pVdia)- deduciblep(pdias,pVdia);

    return pagoSueldo;
}
