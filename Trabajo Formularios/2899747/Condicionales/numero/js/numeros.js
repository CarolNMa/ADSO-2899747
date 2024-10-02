function numero(){
    let NumUno = parseInt(document.getElementById('txtNumUno').value);
    let NumDos = parseInt(document.getElementById('txtNumDos').value);
    let num;
    if(NumUno==NumDos){
        num = "Los numeros son iguales";
    }else if(NumUno<NumDos){
        num = NumDos+ " es mayor";
    }else if(NumDos<NumUno)
        num = NumUno+ " es mayor";
        else{
            num = "Error"; }

    document.getElementById('numero').innerHTML = '<strong>' +num+ '</strong>';
    return false;
}

