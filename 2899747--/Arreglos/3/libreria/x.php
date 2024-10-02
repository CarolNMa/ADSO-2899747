<?php 

$matriz=[
[5,10,15,20,25],
[30,35,40,45,50],
[55,60,65,70,75],
[80,85,90,95,100],
[105,110,115,120,125]];

var_dump("Tabla del 5 \n");

for ($i=0; $i<1; $i++){
    $matriz[$i]; 
    for ($j=0; $j<1; $j++){
        var_dump($matriz[0][0]."  ");
        var_dump($matriz[1][1]."  ");
        var_dump($matriz[2][2]."  ");
        var_dump($matriz[3][3]."  ");
        var_dump($matriz[4][4]."  ");
        var_dump("\n");
    }
     
}
var_dump($matriz);


$matriz2=[[9,18,27,36,45],
[54,63,72,81,90],
[99, 108,117,126,135],
[144,153,162,171,180],
[189,198,207,216,225]];

var_dump("Tabla del 9 \n");

for ($c=0; $c<1; $c++){
    $matriz2[$c];
    for ($d=0; $d<1; $d++){
        var_dump($matriz2[0][0]."  ");
        var_dump($matriz2[1][1]."  ");
        var_dump($matriz2[2][2]."  ");
        var_dump($matriz2[3][3]."  ");
        var_dump($matriz2[4][4]."  ");
        var_dump("\n");  
    }
}
var_dump ($matriz2);

?>
