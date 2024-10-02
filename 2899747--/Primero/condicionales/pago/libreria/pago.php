<?php

$salario;
        $subTranspo;
        $salud;
        $pension;
        $arl;
        $deducci;
        $totalPag;
        $diasTraba=20;
        $valorDia=20000;

        $salario=$diasTraba*$valorDia;
        $salud=$salario*0.12;
        $pension=$salario*0.16;
        $arl=$salario*0.052;
        $deducci=$salud+$pension+$arl;

        if($salario<2300000){

            $subTranspo=1620000;
        }else{

            $subTranspo=0;
        }
        $totalPag=$salario+$subTranspo-$deducci;

        var_dump("La salud es $salud \n");
        var_dump("La pension es $pension\n");
        var_dump("El arl es $arl \n");
        var_dump("El subsidio de transporte es $subTranspo \n");
        var_dump("El total a pagar es $totalPag \n");
?>