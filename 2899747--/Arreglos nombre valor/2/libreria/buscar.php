<?php

$tienda=[];
$numeroRegistro;
$iteracion;
$nuevoProducto=[];

$tienda = [
    ['producto:'=>'Arroz', 'tipoProducto:' => 'granos', 'tipoUnidad:' => 'gramos', 'cantidad:' => 1000, 'precio:' => 2450 ],
    ['producto:'=>'Papa', 'tipoProducto:' => 'fruver', 'tipoUnidad:' => 'gramos', 'cantidad:' => 500, 'precio:' => 1000 ],
    ['producto:'=>'Mora', 'tipoProducto:' => 'fruver', 'tipoUnidad:' => 'gramos', 'cantidad:' => 500, 'precio:' => 1500 ],
    ['producto:'=>'Trucha', 'tipoProducto:' => 'Carnes', 'tipoUnidad:' => 'gramos', 'cantidad:' => 1000, 'precio:' => 9000] ,
    ['producto:'=>'Pollo Entero', 'tipoProducto:' => 'Carnes', 'tipoUnidad:' => 'gramos', 'cantidad:' => 1000, 'precio:' => 4500 ],
];

$nuevoProducto  = ['producto:'=>'Res', 'tipoProducto:' => 'Carnes', 'tipoUnidad:' => 'gramos', 'cantidad:' => 1000, 'precio:' => 7500 ];

array_push($tienda, $nuevoProducto);

$numeroRegistro= count($tienda);

for ($iteracion=0; $iteracion<$numeroRegistro; $iteracion++){

   
    if ($tienda[$iteracion]['tipoProducto:']=='fruver'){

        $listaBusqueda[] = ($tienda[$iteracion]);
    }
    else {
        var_dump("");

    }
}
var_dump($listaBusqueda);

?>