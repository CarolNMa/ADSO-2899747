function porcen(){
    let numUno = parseInt(document.getElementById('txtNumUno').value);

    let porcentaje;
    porcentaje = numUno/100;

    document.getElementById('porcentaje').innerHTML = '<strong> El porcentaje de '+numUno+ ' es: ' +porcentaje+ '</strong>';

    return false;
}