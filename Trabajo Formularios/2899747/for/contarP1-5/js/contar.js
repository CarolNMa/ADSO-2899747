function contars(){
    let numero = parseInt(document.getElementById('txtNumUno').value);
    let contar;
    let numRepet="";

    for(contar=0;contar<=numero;contar++){
        numRepet+=contar+"<br>";
        
    }

    document.getElementById('conteo').innerHTML = '<strong>' +numRepet+'</strong>';

    return false;
}


