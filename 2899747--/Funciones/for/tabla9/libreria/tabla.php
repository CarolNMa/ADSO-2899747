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
    $contar;
    $numero = $pnumero;

    for ($contar=1; $contar<=$numero; $contar++){
        
        $product= calculoProducto($numero, $contar);
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
