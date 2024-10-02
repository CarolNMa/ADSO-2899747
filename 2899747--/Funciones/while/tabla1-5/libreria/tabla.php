<?php

function pares($num){
    $cont = $num%2==0;

    return $cont;

}

function tabla($pnum){
    $numero=$pnum;
    $contar;
    $multi;
    $par=0;
     $impar=0;

    while ($numero<=5){
        $numero= $numero+1;
        $contar=1;

        while($contar<=5){
            $multi=$numero*$contar;

            if (pares($multi)) {
                var_dump(".$contar.  * .$numero.  = .$multi.  BUZZ ");
                $par = $par+1;

                
            }else{
                var_dump(".$contar.  * .$numero.  = .$multi.  BASS ");
                $impar= $impar+1;
            }
            $contar = $contar+1;
        }
    }
    return "Los numeros que son pares son:  .$par.  Y los que son impares son:   .$impar.";
    
}

?>