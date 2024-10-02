function tabla() {
    let numeros = parseInt(document.getElementById('txtNumUno').value);

    let contar = 0;
    let par = 0;
    let impar = 0;
    let tablaDiv = document.getElementById('tabla');
    tablaDiv.innerHTML = ''; 
    

    while (contar < numeros) {
        contar++;
        let numRepet = "";
        let numInterno = 1;
        while (numInterno <= 10) {
            
            let product = contar * numInterno;
            
            if (product % 2 === 0) {
                numRepet += contar + " * " + numInterno + " = " + product + " es Buzz <br>";
                par++;
                
            } else {
                numRepet += contar + " * " + numInterno + " = " + product + " es Bass <br>";
                impar++;
            }
            numInterno++;
        }
        

        tablaDiv.innerHTML += '<div class="tabla-container"><h3 class="titulo_Tabla">Tabla del ' + contar + '</h3><p>' + numRepet + '</p></div>';
    }

    tablaDiv.innerHTML += '<p><strong>Pares: ' + par + '</strong></p>';
    tablaDiv.innerHTML += '<p><strong>Impares: ' + impar + '</strong></p>';

    return false;
}

