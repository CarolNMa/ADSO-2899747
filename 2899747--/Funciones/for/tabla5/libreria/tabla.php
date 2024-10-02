<?php

function tablaMulti($pnumero){
    $contar;
    $numero = $pnumero;

    for ($contar=1; $contar<=$numero; $contar++){
        
        $product= $contar * $numero;
        var_dump("$numero  *  $contar  =  $product");

    }
    return "Fin de la tabla";
}



?>