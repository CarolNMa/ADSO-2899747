<?php


function contarNumeros($pnumeros){
$contador = 0;
$numeros = $pnumeros;
while ($contador < $numeros) {
    $contador= $contador+1;
    var_dump($contador);
}
return $contador;
}

?>