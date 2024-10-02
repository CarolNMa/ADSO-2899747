function tabla() {
    let numeros = parseInt(document.getElementById('txtNumUno').value);
    let contar = 1;
    let numRepet = "";


    while (contar <= numeros) {

        numRepet += `5 x ${contar} = ${5 * contar}<br>`;
        contar = contar + 1;

    }

    document.getElementById('tabla').innerHTML = '<strong>' + numRepet + '</strong>';

    return false;
}


