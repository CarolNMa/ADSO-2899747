/**
 * Sueldo de una persona
 * autor: Carol M
 * fecha: Lunes 15 de abril de 2024
 */

function salarios(pdiasTraba,pvalorDia){

    let diasTraba=pdiasTraba;
    let valorDia=pvalorDia;

    let salario= diasTraba*valorDia;
    let salud=salario*0.12;
    let pension=salario*0.16;
    let arl=salario*0.052;
    let deducci=salud+pension+arl;


    if (salario<2300000){
        subTransp=1620000;
    }else{
        subTransp=0;

    }
    totalPag=salario+subTransp-deducci;

    console.log("La salud es: " +salud);
    console.log ("La pension es:" +pension);
    console.log("El arl es: " +arl);
    console.log("El subsidio de transporte es: " +subTransp);
    console.log("El total a pagar es: " +totalPag);
    
    return totalPag;

}

/**
 * Como expresion
 */

const salariosExp= function(pdiasTraba,pvalorDia){

    let diasTraba=pdiasTraba;
    let valorDia=pvalorDia;

    let salario= diasTraba*valorDia;
    let salud=salario*0.12;
    let pension=salario*0.16;
    let arl=salario*0.052;
    let deducci=salud+pension+arl;


    if (salario<2300000){
        subTransp=1620000;
    }else{
        subTransp=0;

    }
    totalPag=salario+subTransp-deducci;

    console.log("La salud es: " +salud);
    console.log ("La pension es:" +pension);
    console.log("El arl es: " +arl);
    console.log("El subsidio de transporte es: " +subTransp);
    console.log("El total a pagar es: " +totalPag);
    
    return totalPag;

}