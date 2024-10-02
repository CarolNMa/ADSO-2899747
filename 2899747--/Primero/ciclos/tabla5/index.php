<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla del 5</title>
</head>
<body>
    <?php

        $num;
        $multi=5;
        $product;

        for($num=1; $num<=$multi; $num++){

            $product=$multi*$num;

            var_dump("$multi  x  $num  =  $product \n");
        }
    ?>
</body>
</html>