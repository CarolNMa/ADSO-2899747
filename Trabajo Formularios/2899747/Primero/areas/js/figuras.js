function figuras(){
    let medidaUno = parseInt(document.getElementById('txtNumUno').value);
    let medidaDos = parseInt(document.getElementById('txtNumDos').value);
    let figura = document.getElementById('figuraG').value ;
    let total;
    if(figura === 'cuadrado' ){
        total=medidaUno*medidaDos;
        document.getElementById('img').innerHTML = '<img src="img/cuadrado.jpeg" id="img">'
    }else if(figura==='rectangulo'){
        total=medidaUno*medidaDos;
        document.getElementById('img').innerHTML = '<img src="img/rectangulo.jpeg" id="img">'
    }else if(figura==='triangulo'){
        total=(medidaUno*medidaDos)/2;
        document.getElementById('img').innerHTML = '<img src="img/triangulo.jpeg" id="img">'
    }else{
        total='Operaciones invalida';
    }

    document.getElementById('figura').innerHTML = '<strong> El area del ' +figura+ ' es ' +total+ '</strong>';

    return false;
}
