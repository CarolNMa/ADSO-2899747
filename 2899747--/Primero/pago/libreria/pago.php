<?php

$pagoTotal;
        $sueldo;
        $salud;
        $pension;
        $arl;
        $diasTraba=28;
        $valoDia=60000;
        $descuento;


        $sueldo=$diasTraba*$valoDia;
        $salud=$sueldo*0.12;
        $pension=$sueldo*0.16;
        $arl=$sueldo*0.052;
        $descuento=$sueldo+$pension+$arl;
        $pagoTotal=$descuento-$sueldo;


?>
