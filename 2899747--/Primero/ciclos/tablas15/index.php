<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla del 1 al 5 </title>
</head>
<body>
    <?php
        $contar=0;
        $num=0;
        $multi;
        $par=0;
        $impar=0;

        while($num<=5){
            $num=$num+1;
            $contar=1;

            while($contar<=5){

                $multi=$num*$contar;
                
                if ($multi%2==0){
                    
                    var_dump("$num x $contar = $multi \n");
                    var_dump("$multi  Es buzz");

                    $par=$par+1;
                }else{

                    var_dump("$num x $contar  = $multi  \n");
                    var_dump("$multi Es bass");

                    $impar=$impar+1;
                }
                $contar=$contar+1;
            }
            
        }
        var_dump("Par es = $par \n");
            var_dump("Impar es = $impar \n");
    ?>
</body>
</html>