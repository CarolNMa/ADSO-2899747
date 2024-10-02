<?php

include('libreria/notas.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notas</title>
</head>
<body>
    <?php
     $nota1 = porcentaje(5.0,0.3);
     $nota2 = porcentaje(2.0,0.3);
     $nota3 = porcentaje(5.0,0.4);

     $suma = $nota1+$nota2+$nota3;

    var_dump($suma);


      
    ?>
    
</body>
</html>
