function salarioP(){
    let diasTraba = parseInt(document.getElementById('txtNumUno').value);
    let valorDia = parseInt(document.getElementById('txtNumDos').value);
    let salarioMinimo = parseInt(document.getElementById('txtNumTres').value);
    let subTranspo = parseInt(document.getElementById('txtNumCuatro').value);


    let salario=diasTraba*valorDia;

   
    
    if (salario <=2*salarioMinimo) {
        salario+=subTranspo;
    }else {
        subTranspo=0;
    }

    let pagoSalud=salario*0.12;
        

    let pagoPension=salario*0.16;
  
    let arlP= salario*0.052;

    let pagoDeducible= pagoSalud+pagoPension+arlP;
   
    let pagoTotall=salario-pagoDeducible;
   

    document.getElementById('pago').innerHTML = '<strong>' +pagoTotall+'</strong>';

    return false;
}