function salarioP(){
    let NumUno = parseInt(document.getElementById('txtNumUno').value);
    let NumDos = parseInt(document.getElementById('txtNumDos').value);
    
    let total=NumUno*NumDos;


    let pagoSalud=total*0.12;
        
   
    let pagoPension=total*0.16;
    

    let arlP= total*0.052;
    

    let pagoDeducible= pagoSalud+pagoPension+arlP;
   
   
    let pagoTotall=total-pagoDeducible;
   

    document.getElementById('pago').innerHTML = '<strong> Su pago Total es de: ' +pagoTotall+' <br> Su salud es de: '+pagoSalud+ '<br> Su pensión es de: ' +pagoPension+ '<br> Su deducible es de:'+pagoDeducible+'</strong>';

    return false;
}


