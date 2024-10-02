<?php

function calcularEdad($anioActual, $anioNacimiento) {
    $total= $anioActual - $anioNacimiento;
    return $total;
}

function edades($anioActual, $anioNac1, $anioNac2, $anioNac3) {
    $edad1 = calcularEdad($anioActual, $anioNac1);
    $edad2 = calcularEdad($anioActual, $anioNac2);
    $edad3 = calcularEdad($anioActual, $anioNac3);

    $promedio = ($edad1+$edad2 + $edad3)/3;

    var_dump("El promedio de edades es: $promedio");

    if ($promedio > 18) {
        var_dump("Son mayores de edad");
    } else {
        var_dump("Son menores de edad");
    }
    return $promedio;
}

?>