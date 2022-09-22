//funcion paridad
function paridad(valor) {
    //SCOPE es donde es visible la variable
    const labelParidad = document.getElementById('paridad');

    //invocar a la funcion
    let esNumeroPar = esPar(valor);

    if(esNumeroPar) {
        labelParidad.innerHTML = 'PAR';
    }else {
        labelParidad.innerHTML = 'IMPAR';
    }
}

//retorna un boolean
function esPar(valor) {
    //determino si valor es par
    //let resto = valor % 2; // 0 o 1
    /*
    if(resto ===0) 
        return true;
    else
        return false;
    
    return resto === 0;
    */
    return valor % 2 === 0;
}



function decrementar() {
    const label = document.getElementById('contador');
    let valor = label.innerHTML;
    valor = parseInt(valor) - 1;

    //update del valor
    label.innerHTML = valor;

    paridad(valor);
}

//cuando es un numero es par?
// D |_d_
// R  c
//R ==0 => D es par

// (numero % 2) > R

const label = {
    innerHTML: ''
};
label.innerHTML = 'PAR';


function incrementar() {
    const label = document.getElementById('contador');
    let valor = parseInt(label.innerHTML);

    //incremento el valor de contadorValor
    //contadorValor = contadorValor + 1;
    valor++; // post incremento
    //++contadorValor; // preincremento
    label.innerHTML = valor;

    paridad(valor);
}