/**
 * Contar numeros pares e impares
* autor: Carol M
 * fecha: Lunes 15 de abril de 2024
 */

function par (num){
    let cont=num% 2===0;
    return cont;
}


function pareimpar(pnumeros){
    let contar = 0;
    let numeros = pnumeros;

    while (contar < numeros){
        contar= contar+1;

        if (par(contar)) {
            console.log(+contar+ " Es par");
        }else {
            console.log(+contar+ " Es impar" );
        }
    }
    return numeros;
}

/** como expresion */

const parExp = function (num){
    let cont=num% 2===0;
    return cont;
}
const pareimparExp= function(pnumeros){
    let contar = 0;
    let numeros = pnumeros;

    while (contar < numeros){

        contar= contar+1;

        if (parExp(contar)) {
            console.log(+contar+ " Es par");
        }else {
            console.log(+contar+ " Es impar" );
        }
    }
    return numeros;
}