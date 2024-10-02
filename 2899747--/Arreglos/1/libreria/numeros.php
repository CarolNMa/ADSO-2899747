<?php

 $arreglo = [];

$arreglo = [1,2,3,4,5,6,7,8,9,10];

 $num1=$arreglo[0];
 $num2=$arreglo[1];
 $num3=$arreglo[2];
 $num4=$arreglo[3];
 $num5=$arreglo[4];
 $num6=$arreglo[5];
 $num7=$arreglo[6];
 $num8=$arreglo[7];
 $num9=$arreglo[8];
 $num10=$arreglo[9];


 $cantidad=count($arreglo);


 foreach ($arreglo as $elemento) {
    var_dump($elemento);

    if ($elemento % 2 == 0) {
        var_dump("El numero es par");
    } else {
        var_dump("El numero es impar");
    }
}

?>

?>