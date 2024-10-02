<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pago total</title>
</head>
<body>
    <script>
        let pagoTotal;
        let sueldo;
        let salud;
        let pension;
        let arl;
        let diasTraba=28;
        let valoDia=60000;
        let descuento;


        sueldo=diasTraba*valoDia;
        salud=sueldo*0.12;
        pension=sueldo*0.16
        arl=sueldo*0.052;
        descuento=sueldo+pension+arl;
        pagoTotal=descuento-sueldo;

        console.log("El pago Total es " +pagoTotal+ "\n");
        console.log("La salud es " +salud+ "\n");
        console.log("La pensio es " +pension+ "\n");
        console.log("El arl es " +arl+ "\n");
    </script>
</body>
</html>