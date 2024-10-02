let personas=[];

personas=[
    {id:'1', nombres: 'Aura', apellidos: 'Osorio Cabrera', cargo: 'Odontologa', valorDia: 80000, diasTrabjados: 20 },
    {id:'2', nombres: 'Hari', apellidos: 'Garzon Herrera', cargo: 'Pediatra', valorDia: 75000, diasTrabjados: 30 },
    {id:'3', nombres: 'Luis Alverto', apellidos: 'Gomez Muñoz', cargo: 'Policia', valorDia: 40000, diasTrabjados: 30 },
    {id:'4', nombres: 'Azul', apellidos: 'De Benedet ', cargo: 'Abogada', valorDia: 150000, diasTrabjados: 26 },
    {id:'5', nombres: 'Maria de los angeles', apellidos: 'Contreras Mendoza', cargo: 'Bailarina', valorDia: 100000 , diasTrabjados: 10 },
    {id:'6', nombres: 'Julio ', apellidos: 'Hernandez Cesar', cargo: 'Celador', valorDia: 50000, diasTrabjados: 30 },
    {id:'7', nombres: 'Luisa', apellidos: 'Florian Mayorga', cargo: 'Gerente general', valorDia: 350000 , diasTrabjados: 28 },
    {id:'8', nombres: 'Daniela', apellidos: 'Torres de Tabares', cargo: 'Profesora', valorDia: 60000 , diasTrabjados: 15 },
    {id:'9', nombres: 'Sergio', apellidos: 'Parra Rojas', cargo: 'Enfermero ', valorDia: 55000, diasTrabjados: 31 },
    {id:'10', nombres: 'Ana Sofia', apellidos: 'Lopez Lopez', cargo: 'Secretaria', valorDia: 40000 , diasTrabjados: 30 },

];

console.log(personas);

function salarioP(pdiastrbajados,pvalordia){
    let diasTraba=pdiastrbajados;
    let valorDia=pvalordia;
    let totalSalario=diasTraba*valorDia;
    
    return totalSalario
}


function subTrans(pdias,pVdia){
    let salarioMinimo=1300000;
    let salarioTransp=salarioP(pdias,pVdia);
    let subTranspo;
    
    if (salarioTransp <=2*salarioMinimo) {
        
        subTranspo=120000;
    }else {
        subTranspo=0;
    }
    return subTranspo;
}

function saludp(pdias,pVdia){
    let pagoSalud=salarioP(pdias,pVdia)*0.12;
        
    return pagoSalud;
}

function pensionp(pdias,pVdia){
    let pagoPension=salarioP(pdias,pVdia)*0.16;
    
    return pagoPension;
}

function arlL(pdias,pVdia){
    let arlP= salarioP(pdias,pVdia)*0.052;

    return arlP;
}

function retenciones(pdias,pVdia){
    let salarioMinimo=1300000;
    let salarioReten=salarioP(pdias,pVdia);
    let retencion=0;
    
    if (salarioReten>6*salarioMinimo){

        retencion=salarioReten*0.02;
    }else if (salarioReten>8*salarioMinimo){

        retencion=salarioReten*0.04;
    }else if (salarioReten>12*salarioMinimo){

        retencion=salarioReten*0.08;
    }else {
        retencion="No hay reteciones";
    }

    return retencion;
}

function deducible(pdias,pVdia){
    let pagoDeducible= saludp(pdias,pVdia)+pensionp(pdias,pVdia)+arlL(pdias,pVdia);
    return pagoDeducible;
}

function pagoTotal(pdias,pVdia){
    let pagoSueldo= salarioP(pdias,pVdia)+subTrans(pdias,pVdia)- deducible(pdias,pVdia);

    return pagoSueldo;
}

let nomina=[];
let totales;

for (let i = 0; i < personas.length; i++) {
    let subsidioTransporte = subTrans(personas[i].diasTrabjados, personas[i].valorDia);
    let salud = saludp(personas[i].diasTrabjados, personas[i].valorDia);
    let pension = pensionp(personas[i].diasTrabjados, personas[i].valorDia);
    let arl = arlL(personas[i].diasTrabjados, personas[i].valorDia);
    let retencion = retenciones(personas[i].diasTrabjados, personas[i].valorDia);
    let totalPagar = pagoTotal(personas[i].diasTrabjados, personas[i].valorDia);

    totales = {
        id: personas[i].id,
        nombres: personas[i].nombres,
        apellidos: personas[i].apellidos,
        cargo: personas[i].cargo,
        salario: salarioP(personas[i].diasTrabjados, personas[i].valorDia),
        subsidioTransporte: subsidioTransporte,
        salud: salud,
        pension: pension,
        arl: arl,
        retencion: retencion,
        totalPagar: totalPagar
    };
    nomina.push(totales);
}

console.log(nomina);
/** 
let totalSalud=0;
let totalPension=0;
let totalArl=0;
let totalRetenecion=0;
let totalNomina=0;
let totalPagos=[];

for (let total=0; total<nomina.length;total++){
    totalSalud += nomina[total].salud;
    totalPension += nomina[total].pension;
    totalArl += nomina[total].arl;
    totalRetenecion += nomina[total].retencion;
    totalNomina += nomina[total].totalPagar;

    totalPagos.push({
        totalSalud: totalSalud,
        totalPension: totalPension,
        totalArl: totalArl,
        totalRetenecion: totalRetenecion,
        totalNomina: totalNomina,

    })
}

console.log(totalPagos);
*/
