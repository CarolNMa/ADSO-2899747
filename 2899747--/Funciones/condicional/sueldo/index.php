<?php

include('libreria/sueldo.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Areas</title>
</head>
<body>
    <?php
    $valorDia=16000;
    $dias=30;
    $salarioPersona = salarioP($dias,$valorDia);
    $subsidioTr = subTrans($dias,$valorDia);
    $totalPagarPer = pagoTotal($dias,$valorDia);
    var_dump("El salario es de un total de $salarioPersona");
    var_dump("El subsidio de transporte es de: $subsidioTr");
    var_dump("El pago total es:  $totalPagarPer");

    
    ?>
    
</body>
</html>