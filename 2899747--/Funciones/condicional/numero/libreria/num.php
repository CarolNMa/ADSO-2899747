<?php

function numeros($pnumero,$pnumero2){
    $num=$pnumero;
    $num2=$pnumero2;
    $result;

    if ($num==$num2) {
        $result="Son iguales";
        
    }else if($num>$num2){
        $result="Es mayor";
    }else{
        $result="Es menor";
    }
    return $result;
}

?>