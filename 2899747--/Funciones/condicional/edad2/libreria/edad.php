<?php

function edades($anioAct, $anioNac){
    $edad= $anioAct- $anioNac;

    if($edad>17){
        var_dump("Es mayor de edad");
    }else {
        var_dump("Es menor de edad");
    }
    return $edad;
}


?>