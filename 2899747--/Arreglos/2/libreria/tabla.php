<?php 
$matriz=[[5,10,15,20,25],
[30,35,40,45,50],
[55,60,65,70,75],
[80,85,90,95,100],
[105,110,115,120,125]];

$impar=0;
$par=0;
for ($i=0; $i<count($matriz); $i++){
    $matriz[$i]; 
    for ($j=0; $j<count($matriz[$i]); $j++){;
        if ($matriz[$i][$j]%2==0){
            
            $par+=$matriz[$i][$j];
        }
        else{
            
            $impar+=$matriz[$i][$j];
        }
    }
  
}
var_dump ($matriz);
var_dump("La suma de los numeros pares es: $par");
var_dump("La suma de los numeros impares es: $impar");

$matriz2=[[9,18,27,36,45],
[54,63,72,81,90],
[99, 108,117,126,135],
[144,153,162,171,180],
[189,198,207,216,225]];

$imparp=0;
$parp=0;
for ($c=0; $c<count($matriz2); $c++){
    $matriz2[$c];
    for ($d=0; $d<count($matriz2[$c]); $d++){
        if ($matriz2[$c][$d]%2==0){
            $parp+=$matriz2[$c][$d];
        }else {
        $imparp+=$matriz2[$c][$d];
    }
    }
}
var_dump ($matriz2);
var_dump("La suma de los numeros pares es: $parp");
var_dump("La suma de los numeros impares es: $imparp");


?>