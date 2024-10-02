function edades(){
    let NumUno = parseInt(document.getElementById('txtNumUno').value);
    let NumDos = parseInt(document.getElementById('txtNumDos').value);
    total = NumUno-NumDos;
    if(total>17){
        edad = "Usted es mayor de edad";
    }else{
        edad = "Ustes es menor de edad"
    }

    document.getElementById('edad').innerHTML = '<strong>' +edad+ '</strong>';
    return false;
}


