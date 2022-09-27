//funcion paridad
function paridad(valor) {
    //SCOPE es donde es visible la variable
    //al estar fuera del bucle se ve siempre
    const labelParidad = document.getElementById('paridad');

    //invoco a la funcion esPar
    let esNumeroPar = esPar(valor);

    if(esNumeroPar) {
        labelParidad.innerHTML = "PAR";
    } else {
        labelParidad.innerHTML = "IMPAR";
    }
}

//con esta funcion determino si el valor es par
//esta funcion va a retornar un booleano (T/F)
function esPar(valor) {
    //determino si valor es par
    /*
    let resto = valor % 2; // esta division siempre da 0 o 1
    if(resto ===0)
        return true;
    else
        return false; 
    return resto === 0;  
    */

    /*toda esta funcion se podria resumir de la sig manera*/
    return valor % 2 === 0;
    
}

function incrementar () {
    const label = document.getElementById('contador');
    let valor = parseInt(label.innerHTML);

    //para incrementar el valor hay 3 maneras
    //contadorValor = contadorValor + 1     //post incremento
    //contadorValor++      //post incremento
    //++contadorValor;      //preincremento

    //sumo
    valor++;
    //update del valor
    label.innerHTML = valor;
    //console.log(contadorValor); si quiero ver el resultado por consola

    paridad(valor);    
}

function decrementar () {
    //en esta funcion cambio el nombre del contador label y contador valor
    const label = document.getElementById('contador');
    let valor = label.innerHTML; 

    //resto utilizando otro codigo con igual final
    valor = parseInt(valor) - 1;

    //update del valor
    label.innerHTML = valor;
    //console.log(valor);

    paridad(valor);
}
//un numero es par cuando al dividirse por 2 el resto es 0
// (numero % 2) > R

