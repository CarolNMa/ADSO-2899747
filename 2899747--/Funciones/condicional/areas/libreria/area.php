<?php

function calculoArea($lado) {
    
    $total=$lado*$lado;
    
    return $total;
}

function cicloCuadrados($cuad1, $cuad2, $cuad3) {
    if ($cuad1 === $cuad2 && $cuad2 === $cuad3) {
        var_dump("Los 3 cuadrados son iguales");
    } else if ($cuad1 > $cuad2 && $cuad1 > $cuad3) {
        var_dump("El cuadrado 1 es mayor");
    } else if ($cuad3 > $cuad2) {
            var_dump("El cuadrado 3 es mayor");
        } else {
            var_dump("El cuadrado 2 es mayor");
        }
}

function areas($plado, $plado2, $plado3) {
    $lado1 = $plado;
    $lado2 = $plado2;
    $lado3 = $plado3;
    
    $cuad1 = calculoArea($lado1);
    $cuad2 = calculoArea($lado2);
    $cuad3 = calculoArea($lado3);
    
    $result = cicloCuadrados($cuad1, $cuad2, $cuad3);

return $result;

}

?>