//COTIZADOR DE PRESUPUESTO

//saludo

//let cliente = prompt("Ingrese su nombre").toUpperCase();
//alert("Bienvenida/o " + cliente + " a On Travel. "  + " ¡Empecemos a cumplir tus sueños!");

//

let calculadorVacacional = document.getElementById('calculadorVacacional');


function calcular() {

    let presupuesto = parseInt(document.getElementById('presupuesto').value);
    let alojamiento = parseInt(document.getElementById('alojamiento').value);
    let transporte = parseInt(document.getElementById('transporte').value);
    let comida = parseInt(document.getElementById('comida').value);

    document.getElementById('result').innerHTML =(presupuesto - (alojamiento + transporte + comida)) ;
   
 
}

function limpiar() {
    document.getElementById('calculadorVacacional').reset();
    
}




 



