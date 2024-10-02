function tabla() {
    let numeros = parseInt(document.getElementById('txtNumUno').value);

    let contar = 1;
    let numRepet = "";
    let product;

    while (contar <= numeros) {
        product = contar * 9;

        if (product % 2 == 0) {
            numRepet += product + " es par <br>";
        } else {
            numRepet += product + " es impar <br>";
        }

        contar = contar + 1;
    }

    document.getElementById('tabla').innerHTML = '<strong>' + numRepet + '</strong>';

    return false;
}