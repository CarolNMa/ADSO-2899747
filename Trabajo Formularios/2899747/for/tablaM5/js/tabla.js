function tabla() {
    let numeros = parseInt(document.getElementById('txtNumUno').value);
    let contar;
    let numRepet = "";

    for(contar=1;contar<=numeros;contar++){

        numRepet += `5 x ${contar} = ${5 * contar}<br>`;

    }

    document.getElementById('tabla').innerHTML = '<strong>' + numRepet + '</strong>';

    return false;
}


