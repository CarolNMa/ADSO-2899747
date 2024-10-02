<?php

$nota1=50;
        $nota2=40;
        $nota3=20;
        $result;
        $porcen1;
        $porcen2;
        $porcen3;
        

        $porcen1=($nota1*20)/100;
        $porcen2=($nota2*35)/100;
        $porcen3=($nota3*45)/100;

        var_dump("El porcentaje uno es $porcen1 \n");
        var_dump("El porcentaje dos es $porcen2 \n");
        var_dump("El porcentaje tres es $porcen3 \n");

        $result=$porcen1+$porcen2+$porcen3;

        var_dump("La suma de los porcentajes son: $result \n");

        if($result>45){
            var_dump("Su nota es superior");
        }else 
        if($result<=45 && $result>35){

            var_dump("Su nota es buena");
        }else 
        if($result<=35 && $result>=3){

            var_dump("Su nota es media");
        }else{

            var_dump("Su nota es mala");
        }
?>