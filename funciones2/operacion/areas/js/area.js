/**
 * Operaciones aritmeticas aplicando funciones como una expresión
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */
function figuras(paltura,pbase, pfigura) {


    let base = pbase;
    let altura = paltura;
    let figura= pfigura;
    let area;

    if (figura == "cuadrado"){

        area = base*base;
    } else 
    if (figura == "rectangulo"){
        area = (base*altura);
    }else 
    if (figura== "triangulo"){
        area= (base*altura)/2;
    }else {
        area = "no es posible el calculo";
    }
    return area;
}


/**
 * Como Expresión
 */

const figurasExp = function(paltura,pbase, pfigura) {


    let base = pbase;
    let altura = paltura;
    let figura= pfigura;
    let area;

    if (figura == "cuadrado"){

        area = base*base;
    } else 
    if (figura == "rectangulo"){
        area = (base*altura);
    }else 
    if (figura== "triangulo"){
        area= (base*altura)/2;
    }else {
        area = "no es posible el calculo";
    }
    return area;
}
