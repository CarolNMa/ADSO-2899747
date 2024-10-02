<?php

function tablaMulti($pnumero){
    $contar = 0;
    $numero = $pnumero;

    while ($contar<$numero){
        
        $contar=$contar+1;
        $product= $contar * $numero;
       var_dump("$numero  *  $contar  =  $product");

    }
    return "Fin de la tabla";
}



?>