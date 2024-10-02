function tabla() {
    let numeros = parseInt(document.getElementById('txtNumUno').value);

    let contar;
    let numRepet = "";
    let product;

    for(contar=1;contar<=numeros;contar++){
        product = contar * 9;

        if (product % 2 == 0) {
            numRepet += product + " es par <br>";
        } else {
            numRepet += product + " es impar <br>";
        }

    }

    document.getElementById('tabla').innerHTML = '<strong>' + numRepet + '</strong>';

    return false;
}