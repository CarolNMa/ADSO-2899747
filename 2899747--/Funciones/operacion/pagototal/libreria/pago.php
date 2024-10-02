<?php

function salarioP($pdiastrbajados,$pvalordia){
    $diasTraba=$pdiastrbajados;
    $valorDia=$pvalordia;
    $totalSalario=$diasTraba*$valorDia;
    
    return $totalSalario;
}

function saludp($pdiastrbajados,$pvalordia){
    $pagoSalud=salarioP($pdiastrbajados,$pvalordia)*0.12;
        
    return $pagoSalud;
}
function pensionp($pdiastrbajados,$pvalordia){
    $pagoPension=salarioP($pdiastrbajados,$pvalordia)*0.16;
    
    return $pagoPension;
}

function arlL($pdiastrbajados,$pvalordia){
    $arlP= salarioP($pdiastrbajados,$pvalordia)*0.052;

    return $arlP;
}

function descuento($pdiastrbajados,$pvalordia){
    $pagoDeducible= saludp($pdiastrbajados,pvalordia)+pensionp($pdiastrbajados,pvalordia)+arlP($pdiastrbajados,$pvalordia);
    return $pagoDeducible;
}

function pagoTotal($pdiastrbajados,$pvalordia){
    $pagoTotall=salarioP($pdiastrbajados,$pvalordia)-descuento($pdiastrbajados,$pvalordia);
    return $pagoTotall;
}
?>