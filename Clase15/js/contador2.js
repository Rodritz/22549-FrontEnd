function incrementar () {
    const contadorLabel = document.getElementById('contador');
    let contadorValor = parseInt(contadorLabel.innerHTML);

    //para incrementar el valor hay 3 maneras
    //contadorValor = contadorValor + 1     //post incremento
    //contadorValor++      //post incremento
    //++contadorValor;      //preincremento

    //sumo
    contadorValor++;

    //update del valor
    contadorLabel.innerHTML = contadorValor;

    //console.log(contadorValor);
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
}
