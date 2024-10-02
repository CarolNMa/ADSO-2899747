function tablaMulti(pnumero){
    let contar;
    let numero = pnumero;

    for (contar=1; contar<numero; contar++){
        
        let product= contar * numero;
        console.log(numero + " * " + contar + " = " + product);

    }
    return "Fin de la tabla";
}



/**Como expresion */

const tablaMultiexp = function(pnumero){
    let contar;
    let numero = pnumero;

    for (contar=1; contar<numero; contar++){
        
        let product= contar * numero;
        console.log(numero + " * " + contar + " = " + product);

    }
    return "Fin de la tabla";
} 