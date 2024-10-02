<?php

function salarioP($pdias,$pVdia){
    $dias=$pdias;
    $vdia=$pVdia;
    $totalSalario=$dias*$vdia;
    
    return $totalSalario;
}

function subTrans($pdias,$pVdia){
    $salarioMinimo=1600000;
    $salarioTransp=salarioP($pdias,$pVdia);
    $subTranspo;
    
    if ($salarioTransp <=2*$salarioMinimo) {
        
        $subTranspo=11400;
    }else {
        $subTranspo=0;
    }
    return $subTranspo;
}

function saludp($pdias,$pVdia){
    $pagoSalud=salarioP($pdias,$pVdia)*0.12;
        
    return $pagoSalud;
}

function pensionp($pdias,$pVdia){
    $pagoPension=salarioP($pdias,$pVdia)*0.16;
    
    return $pagoPension;
}

function arlL($pdias,$pVdia){
    $arlP= salarioP($pdias,$pVdia)*0.052;

    return $arlP;
}

function deducible($pdias,$pVdia){
    $pagoDeducible= saludp($pdias,$pVdia)+pensionp($pdias,$pVdia)+arlL($pdias,$pVdia);
    return $pagoDeducible;
}

function pagoTotal($pdias,$pVdia){
    $pagoSueldo= salarioP($pdias,$pVdia)+subTrans($pdias,$pVdia)- deducible($pdias,$pVdia);


    return $pagoSueldo;
}


?>