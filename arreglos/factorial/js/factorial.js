let resultadoPrint = '';
let iteracion;
for (iteracion = 1; iteracion <= 6; iteracion++) {
    let factorial = 1;
    let contador=1;
    for (contador; contador <= iteracion; contador++) {
        factorial= factorial * contador;
    }
    resultadoPrint += '<li class="list-group-item">' + iteracion + '! = ' + factorial + '</li>';
}

document.getElementById('factorial').innerHTML = resultadoPrint;
