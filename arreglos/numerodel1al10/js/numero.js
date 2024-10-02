/**
 * Numeros del 1 al 10 
 * Autor: Carol M
 * Fecha: 8 Julio de 2024
 */

let arregloNumero =[];
arregloNumero = [1,2,3,4,5,6,7,8,9,10];
let resultadoPrint='';
let iteracion;


for(iteracion = 0; iteracion<arregloNumero.length; iteracion++){
    resultadoPrint += '<li class="list-group-item">'+arregloNumero[iteracion]+'</li>';
}

document.getElementById('listaNumeros').innerHTML = resultadoPrint;

arregloNumero=[];
for(iteracion = 0; iteracion<10; iteracion++){
    numero= iteracion+1;
    arregloNumero.push(numero);
}

resultadoPrint='';

for(iteracion = 0; iteracion<arregloNumero.length; iteracion++){
    resultadoPrint += '<li class="list-group-item">'+arregloNumero[iteracion]+'</li>';
}

document.getElementById('listaDosNumeros').innerHTML = resultadoPrint;
