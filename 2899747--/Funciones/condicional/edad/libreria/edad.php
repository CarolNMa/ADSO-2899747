<?php
function edades($pedad){
    
    $edad=$pedad;
    
    if($edad>=18){
    $edad="ES MAYOR DE EDAD";
}else {
    $edad="ES MENOR DE EDAD";
}
return $edad;
}
?>