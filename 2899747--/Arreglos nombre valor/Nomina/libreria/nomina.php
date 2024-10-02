<?php

$personas = [
    ['id' => '1', 'nombres' => 'Aura', 'apellidos' => 'Osorio Cabrera', 'cargo' => 'Odontologa', 'valorDia' => 80000, 'diasTrabajados' => 20],
    ['id' => '2', 'nombres' => 'Hari', 'apellidos' => 'Garzon Herrera', 'cargo' => 'Pediatra', 'valorDia' => 75000, 'diasTrabajados' => 30],
    ['id' => '3', 'nombres' => 'Luis Alverto', 'apellidos' => 'Gomez Muñoz', 'cargo' => 'Policia', 'valorDia' => 40000, 'diasTrabajados' => 30],
    ['id' => '4', 'nombres' => 'Azul', 'apellidos' => 'De Benedet ', 'cargo' => 'Abogada', 'valorDia' => 150000, 'diasTrabajados' => 26],
    ['id' => '5', 'nombres' => 'Maria de los angeles', 'apellidos' => 'Contreras Mendoza', 'cargo' => 'Bailarina', 'valorDia' => 100000, 'diasTrabajados' => 10],
    ['id' => '6', 'nombres' => 'Julio ', 'apellidos' => 'Hernandez Cesar', 'cargo' => 'Celador', 'valorDia' => 50000, 'diasTrabajados' => 30],
    ['id' => '7', 'nombres' => 'Luisa', 'apellidos' => 'Florian Mayorga', 'cargo' => 'Gerente general', 'valorDia' => 350000, 'diasTrabajados' => 28],
    ['id' => '8', 'nombres' => 'Daniela', 'apellidos' => 'Torres de Tabares', 'cargo' => 'Profesora', 'valorDia' => 60000, 'diasTrabajados' => 15],
    ['id' => '9', 'nombres' => 'Sergio', 'apellidos' => 'Parra Rojas', 'cargo' => 'Enfermero ', 'valorDia' => 55000, 'diasTrabajados' => 31],
    ['id' => '10', 'nombres' => 'Ana Sofia', 'apellidos' => 'Lopez Lopez', 'cargo' => 'Secretaria', 'valorDia' => 40000, 'diasTrabajados' => 30]
];

function salarioP($pdias, $pVdia){
    $diasTraba = $pdias;
    $valorDia = $pVdia;
    $totalSalario = $diasTraba * $valorDia;
    
    return $totalSalario;
}

function subTrans($pdias, $pVdia){
    $salarioMinimo = 1300000;
    $salarioTransp = salarioP($pdias, $pVdia);
    $subTranspo;
    
    if ($salarioTransp <= 2 * $salarioMinimo) {
        $subTranspo = 120000;
    } else {
        $subTranspo = 0;
    }
    return $subTranspo;
}

function saludp($pdias, $pVdia){
    $pagoSalud = salarioP($pdias, $pVdia) * 0.12;
        
    return $pagoSalud;
}

function pensionp($pdias, $pVdia){
    $pagoPension = salarioP($pdias, $pVdia) * 0.16;
    
    return $pagoPension;
}

function arlL($pdias, $pVdia){
    $arlP = salarioP($pdias, $pVdia) * 0.052;

    return $arlP;
}

function retenciones($pdias, $pVdia){
    $salarioMinimo = 1300000;
    $salarioReten = salarioP($pdias, $pVdia);
    $retencion = 0;
    
    if ($salarioReten > 6 * $salarioMinimo){
        $retencion = $salarioReten * 0.02;
    } elseif ($salarioReten > 8 * $salarioMinimo){
        $retencion = $salarioReten * 0.04;
    } elseif ($salarioReten > 12 * $salarioMinimo){
        $retencion = $salarioReten * 0.08;
    } else {
        $retencion = "No hay retenciones";
    }

    return $retencion;
}

function deducible($pdias, $pVdia){
    $pagoDeducible = saludp($pdias, $pVdia) + pensionp($pdias, $pVdia) + arlL($pdias, $pVdia);
    return $pagoDeducible;
}

function pagoTotal($pdias, $pVdia){
    $pagoSueldo = salarioP($pdias, $pVdia) + subTrans($pdias, $pVdia) - deducible($pdias, $pVdia);

    return $pagoSueldo;
}

$nomina = [];
$totales;

for ($iteracion = 0; $iteracion < count($personas); $iteracion++) {
    $subsidioTransporte = subTrans($personas[$iteracion]['diasTrabajados'], $personas[$iteracion]['valorDia']);
    $salud = saludp($personas[$iteracion]['diasTrabajados'], $personas[$iteracion]['valorDia']);
    $pension = pensionp($personas[$iteracion]['diasTrabajados'], $personas[$iteracion]['valorDia']);
    $arl = arlL($personas[$iteracion]['diasTrabajados'], $personas[$iteracion]['valorDia']);
    $retencion = retenciones($personas[$iteracion]['diasTrabajados'], $personas[$iteracion]['valorDia']);
    $totalPagar = pagoTotal($personas[$iteracion]['diasTrabajados'], $personas[$iteracion]['valorDia']);

    $totales = [
        'id' => $personas[$iteracion]['id'],
        'nombres' => $personas[$iteracion]['nombres'],
        'apellidos' => $personas[$iteracion]['apellidos'],
        'cargo' => $personas[$iteracion]['cargo'],
        'salario' => salarioP($personas[$iteracion]['diasTrabajados'], $personas[$iteracion]['valorDia']),
        'subsidioTransporte' => $subsidioTransporte,
        'salud' => $salud,
        'pension' => $pension,
        'arl' => $arl,
        'retencion' => $retencion,
        'totalPagar' => $totalPagar
    ];
    array_push($nomina, $totales);
}
var_dump($nomina);

?>

