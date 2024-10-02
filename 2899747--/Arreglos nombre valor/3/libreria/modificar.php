<?php

$tienda=[];
$numeroRegistro;
$iteracion;
$nuevoProducto;
$listaBusqueda=[];

$tienda = [
    ['producto:'=>'Arroz', 'tipoProducto:' => 'granos', 'tipoUnidad:' => 'gramos', 'cantidad:' => 1000, 'precio:' => 2450 ],
    ['producto:'=>'Papa', 'tipoProducto:' => 'fruver', 'tipoUnidad:' => 'gramos', 'cantidad:' => 500, 'precio:' => 1000 ],
    ['producto:'=>'Mora', 'tipoProducto:' => 'fruver', 'tipoUnidad:' => 'gramos', 'cantidad:' => 500, 'precio:' => 1500 ],
    ['producto:'=>'Trucha', 'tipoProducto:' => 'Carnes', 'tipoUnidad:' => 'gramos', 'cantidad:' => 1000, 'precio:' => 9000] ,
    ['producto:'=>'Pollo Entero', 'tipoProducto:' => 'Carnes', 'tipoUnidad:' => 'gramos', 'cantidad:' => 1000, 'precio:' => 4500 ],
];


$nuevoProducto = ['producto:'=>'Res', 'tipoProducto:' => 'Carnes', 'tipoUnidad:' => 'gramos', 'cantidad:' => 1000, 'precio:' => 7500 ];

array_push($nuevoProducto);

$numeroRegistro= count($tienda);

$tienda[2]['producto']= 'Manzana';


var_dump($tienda);

?>


