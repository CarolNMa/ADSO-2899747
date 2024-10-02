function edades(){
    let NumUno = parseInt(document.getElementById('txtNumUno').value);

    if(NumUno>=18){
        edad = "Usted es mayor de edad";
    }else{
        edad = "Ustes es menor de edad"
    }

    document.getElementById('edad').innerHTML = '<strong>' +edad+ '</strong>';
    return false;
}


