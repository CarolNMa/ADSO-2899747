<?php
function par ($num){
    $cont=$num% 2===0;
    return $cont;
}

function pareimpar($pnumeros){
    $contar;
    $numeros = $pnumeros;

    for ($contar=1; $contar<=$numeros; $contar++){
    

        if (par($contar)) {
            var_dump(" .$contar. Es par  ");
            
            
        }else {
            var_dump(" .$contar.  Es impar " );
        }
    }
    return $numeros;
}
?>