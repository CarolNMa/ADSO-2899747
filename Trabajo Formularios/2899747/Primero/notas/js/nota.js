function notas(){
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let numDos = parseFloat(document.getElementById('txtNumDos').value);
    let numTres = parseFloat(document.getElementById('txtNumTres').value);
    
    let nota1=numUno*0.3;
    let nota2=numDos*0.3;
    let nota3=numTres*0.4;
    
    let result=nota1+nota2+nota3;


    document.getElementById('notas').innerHTML = '<strong>' +result+ '</strong>';

    return false;
}