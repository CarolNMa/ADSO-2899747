<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Par e impar</title>
</head>
<body>
    <?php
        $contar;
        $numero=5;

        for($contar=1; $contar<=$numero; $contar++){

            if($contar%2==0){

                var_dump("$contar Es par");
            }else {

                var_dump("$contar Es impar");
            }
        }
    ?>
</body>
</html>