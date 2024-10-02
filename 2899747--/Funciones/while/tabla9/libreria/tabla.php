<?php

function par($num){
    $cont= $num%2==0;

    return $cont;

}

function calculoProducto($contar, $numero){

    $producto= $contar*$numero;

    return $producto;
}


function tablaMulti($pnumero){
    $contar = 0;
    $numero = $pnumero;

    while ($contar<$numero){
        
        $contar=$contar+1;
        $product= calculoProducto($contar,$numero);
        var_dump(" $numero  * $contar = $product ");


        if (par($product)) {
            var_dump(" $product Es par ");
        }else {
            var_dump(" $product Es impar" );
        }
    }
    return "Fin de la tabla";
}


?>
