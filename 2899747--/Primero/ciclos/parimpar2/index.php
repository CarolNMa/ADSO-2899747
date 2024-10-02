<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Par e Impar</title>
</head>
<body>
    <?php
         $contar=0;
         $numero=5;

        while($contar<$numero){

            $contar=$contar+1;

            if($contar%2==0){

                var_dump("$contar  Es par");
        
            }else {

                var_dump("$contar Es impar");
            }
        }
    ?>
</body>
</html>