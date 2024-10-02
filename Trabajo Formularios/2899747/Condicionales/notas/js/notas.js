function notas(){
    let nota1 = parseInt(document.getElementById('txtNumUno').value);
    let nota2 = parseInt(document.getElementById('txtNumDos').value);
    let nota3 = parseInt(document.getElementById('txtNumTres').value);

    let porcentaje1=nota1*0.20;
    let porcentaje2=nota2*0.35;
    let porcentaje3= nota3*0.45;

    let suma= porcentaje1+porcentaje2+porcentaje3;
    let mensaje;
    
    if (suma >45) {
        mensaje="Nota superior";
    }else if(suma<=45 && suma>35) {
        mensaje="Nota buena";
    }else if(suma<=35 && suma>=3)
        mensaje="Nota media";
        else{
            mensaje="Nota mala";
        }
   

    document.getElementById('notas').innerHTML = '<strong>' +mensaje+'</strong>';

    return false;
}





