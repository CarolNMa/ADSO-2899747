function saludo(){
    let saludar;

    saludar = document.getElementById('textSaludo').value;

    document.getElementById('saludo').innerHTML = '<strong>' +saludar+ '</strong>';

    return false;
}