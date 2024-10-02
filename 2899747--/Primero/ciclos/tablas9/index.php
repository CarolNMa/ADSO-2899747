<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla del 9</title>
</head>
<body>
    <?php
        $num=0;
         $multi=9;
         $product;

        while($num<5){

            $num=$num+1;
            $product=$multi*$num;
            if($product%2==0){

                var_dump("$product Es par");
            }else{
                var_dump("$product Es impar");
            }
        }
    ?>
</body>
</html>