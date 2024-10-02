function sumar(){
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let numDos = parseInt(document.getElementById('txtNumDos').value);
    let suma;
    let imagen= "<img src='img/cuadrado.jpg'>";
    suma = numUno + numDos;

    document.getElementById('suma').innerHTML = '<strong>' +suma+ '</strong>'+imagenCuadrado;

    return false;
}