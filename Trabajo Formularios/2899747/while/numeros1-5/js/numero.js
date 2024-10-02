function numero(){
    let numeros = parseInt(document.getElementById('txtNumUno').value);
    let contar=0;
    let numRepet="";
    while(contar<numeros){

        
        contar=contar+1;
        if(contar%2==0){
            numRepet+=contar+" Par <br>" ;
        }else{
            numRepet+=contar+" Impar <br>";
        }
    }

    document.getElementById('conteo').innerHTML = '<strong>' +numRepet+'</strong>';

    return false;
}


