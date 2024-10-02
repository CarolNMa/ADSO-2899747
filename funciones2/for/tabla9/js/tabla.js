/**
 * Tabla de multiplicar del 9
* autor: Carol M
 * fecha: Lunes 15 de abril de 2024
 */

function par(num){
    let cont= num%2==0;

    return cont;

}

function calculoProducto(contar, numero){

    let producto= contar*numero;

    return producto;
}


function tablaMulti(pnumero){
    let contar;
    let numero = pnumero;

    for (contar=1; contar<numero; contar++){
        
        let product= calculoProducto(numero, contar);
        console.log(numero + " * " + contar + " = " + product);


        if (par(product)) {
            console.log(+product+ " Es par");
        }else {
            console.log(+product+ " Es impar" );
        }
    }
    return "Fin de la tabla";
}


/**
 * Como expresion 
 */

const parExp=function(num){
    let cont= num%2==0;

    return cont;

}

const calculoProductoexp = function(contar, numero){

    let producto= contar*numero;

    return producto;
}


const tablaMultiexp= function(pnumero){
    let contar;
    let numero = pnumero;

    for (contar=1; contar<numero; contar++){
        
        let product= calculoProductoexp(numero, contar);
        console.log(numero + " * " + contar + " = " + product);


        if (parExp(product)) {
            console.log(+product+ " Es par");
        }else {
            console.log(+product+ " Es impar" );
        }
    }
    return "Fin de la tabla";
}


