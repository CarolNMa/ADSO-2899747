<?php

$edad1;
$edad2;
$edad3;
$prom;
$anioNac1=2014;
$anioNac2=1995;
$anioNac3=1989;
$anioActual=2023;

$edad1=$anioActual-$anioNac1;
$edad2=$anioActual-$anioNac2;
$edad3=$anioActual-$anioNac3;

$prom=($edad1+$edad2+$edad3)/3;

var_dump("El promedio de edad es = $prom \n");

if($prom>=18){

    var_dump("El promedio de edades son de mayoria de edad");
}else {
    var_dump("El promedio de edades son menores de edad");
}


?>