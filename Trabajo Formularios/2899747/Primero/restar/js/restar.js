function resta(){
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let numDos = parseInt(document.getElementById('txtNumDos').value);
    let opercion = document.getElementById('operacion').value ;
    let resultado;

    if(opercion === 'resta' ){
        resultado=numUno-numDos;
    }else if(opercion==='multiplicacion'){
        resultado=numUno*numDos;
    }else if(opercion==='division'){
        resultado=numUno/numDos;

    }else{
        resultado='Operaciones invalida';
    }

    document.getElementById('restar').innerHTML = '<strong>' +resultado+ '</strong>';

    return false;
}