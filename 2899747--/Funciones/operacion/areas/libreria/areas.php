<?php

function figuras($paltura,$pbase,$pfigura){

    $base=$pbase;
    $altura=$paltura;
    $figura=$pfigura;
    $area;

    if ($figura=="cuadrado") {

        $area = $base*$base;
     
    }else
    if ($figura == "rectangulo"){

        $area = ($base*$altura);
        
    }else 
    if ($figura== "triangulo"){
        $area= ($base*$altura)/2;
    }else {
        $area = "no es posible el calculo";
    }
    return $area;
}



?>