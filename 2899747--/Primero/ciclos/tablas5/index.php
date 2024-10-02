<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla del 5</title>
</head>
<body>
    <?php

        $num=0;
        $multi=5;
        $product;

        while($num<$multi){

            $num=$num+1;
            $product=$multi*$num;

            var_dump("$multi x $num = $product \n");
        }

    ?>
</body>
</html>