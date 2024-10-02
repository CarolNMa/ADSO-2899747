function contars(){
    let numero = parseInt(document.getElementById('txtNumUno').value);
    let contar=0;
    let numRepet="";
    while(contar<=numero){
        numRepet+=contar+"-";
        contar=contar+1;
    }

    document.getElementById('conteo').innerHTML = '<strong>' +numRepet+'</strong>';

    return false;
}


