function numero(){
    let numeros = parseInt(document.getElementById('txtNumUno').value);
    let contar
    let numRepet="";

    for(contar=0;contar<=numeros;contar++){
        if(contar%2==0){
            numRepet+=contar+" Par <br>" ;
        }else{
            numRepet+=contar+" Impar <br>";
        }
    }

    document.getElementById('conteo').innerHTML = '<strong>' +numRepet+'</strong>';

    return false;
}


