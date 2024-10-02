<?php
function sumarNumeros($num1, $num2, $num3) {
    $sumas = $num1 + $num2 + $num3;
    return $sumas;
}

function promedio($num1, $num2, $num3) {
    $suma = sumarNumeros($num1, $num2, $num3);
    $resultado = $suma/3;
    return $resultado;
}


?>