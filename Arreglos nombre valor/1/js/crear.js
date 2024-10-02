let tienda=[];
let numeroRegistro;
let iteracion;
let nuevoProducto;

tienda = [
    {producto:'Arroz', tipoProducto: 'granos', tipoUnidad: 'gramos', cantidad: 1000, precio: 2450 },
    {producto:'Papa', tipoProducto: 'fruver', tipoUnidad: 'gramos', cantidad: 500, precio: 1000 },
    {producto:'Mora', tipoProducto: 'fruver', tipoUnidad: 'gramos', cantidad: 500, precio: 1500 },
    {producto:'Trucha', tipoProducto: 'Carnes', tipoUnidad: 'gramos', cantidad: 1000, precio: 9000 },
    {producto:'Pollo Entero', tipoProducto: 'Carnes', tipoUnidad: 'gramos', cantidad: 1000, precio: 4500 },
]

nuevoProducto = {producto:'Res', tipoProducto: 'carnes', tipoUnidad: 'gramos', cantidad: 1000, precio: 7500 };

tienda.push(nuevoProducto);

numeroRegistro= tienda.length;

for (iteracion=0; iteracion<numeroRegistro; iteracion++){
    console.log(tienda[iteracion]);
}