function calcular(birthdate){
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate()< birthdate.getDate())){

        age--;
    }
    return age;
}

function calcularEdad(){
    const fechaNac=new Date(document.getElementById('txtFecha').value);
    const edad = calcular(fechaNac);
    let tipoEdad;
    if(edad > 17){
        tipoEdad = " Mayor de edad";
    }else{
        tipoEdad = " Menor de edad";
    }

    document.getElementById('edad').innerHTML = '<strong>' +edad+ ' > ' +tipoEdad+ '</strong>';

    return false;
}