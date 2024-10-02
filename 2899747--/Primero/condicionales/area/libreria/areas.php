<?php

 $cuad1;
        $cuad2;
        $cuad3;
        $lado1=20;
        $lado2=3;
        $lado3=27;

        $cuad1=$lado1*$lado1;
        $cuad2=$lado2*$lado2;
        $cuad3=$lado3*$lado3;

        if($cuad1==$cuad2 && $cuad2==$cuad3){

            var_dump("Las areas de los cuadrados son iguales");

        }else
        if($cuad1>$cuad2 && $cuad1>$cuad3 ){

            var_dump("El area del cuadro 1 es mayor");
        }else
        if($cuad3>$cuad2){

            var_dump("El area del cuadrado 3 es mayor");

        }else{
            var_dump("El area del cuadreo 2 es mayor");
        }


?>