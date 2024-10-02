<?php
function par ($num){
    $cont=$num% 2===0;
    return $cont;
}

function pareimpar($pnumeros){
    $contar=0;
    $numeros = $pnumeros;

    while ($contar < $numeros){
        $contar= $contar+1;

        if (par($contar)) {
            var_dump("$contar Es par");
        }else {
            var_dump("$contar Es impar" );
        }
    }
    return $numeros;
}
?>