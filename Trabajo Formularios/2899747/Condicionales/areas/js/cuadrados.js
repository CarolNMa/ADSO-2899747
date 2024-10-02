function cuadrado(){
    let NumUno = parseInt(document.getElementById('txtNumUno').value);
    let NumDos = parseInt(document.getElementById('txtNumDos').value);
    let NumTres = parseInt(document.getElementById('txtNumTres').value);
    let cuad1 = NumUno*NumUno;
    let cuad2 = NumDos*NumDos;
    let cuad3 = NumTres*NumTres;
    let num;
    if(cuad1==cuad2 && cuad2==cuad3){
        num = "Las areas de los cuadrados son iguales";
        document.getElementById('img').innerHTML = '<img src="img/cuadrado.jpeg" id="img">';
    }else if(cuad1>cuad2 && cuad1>cuad3){
        num = "La area del cuadrado uno es mayor";
        document.getElementById('img').innerHTML = '<img src="img/cuadrado.jpeg" id="img">';

    }else if(cuad3>cuad1 && cuad3>cuad2){
        num = "El area del cuadrado tres es mayor";
         
        document.getElementById('img').innerHTML = '<img src="img/cuadrado.jpeg" id="img">';

    }else{
        num = "El area del cuadrado dos es mayor"
        document.getElementById('img').innerHTML = '<img src="img/cuadrado.jpeg" id="img">';

    }

    document.getElementById('cuadrado').innerHTML = '<strong>' +num+ '</strong>';
    return false;
}


