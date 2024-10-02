function prome(){
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let numDos = parseInt(document.getElementById('txtNumDos').value);
    let numTres = parseInt(document.getElementById('txtNumTres').value);

    let prom;
    prom = (numUno + numDos + numTres)/3;

    document.getElementById('promedio').innerHTML = '<strong>' +prom,+ '</strong>';

    return false;
}