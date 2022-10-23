document.getElementById('btn-resumen').addEventListener('click', saldoAPagar);

function saldoAPagar(){
    const entrada = 200;
    let cant = document.getElementById('cantidad').value;
    let cat = document.getElementById('categoria').value;

    let total = entrada * cant;
    let porcentaje = Porcentaje();

    descuento();

}

function Porcentaje(){
    if(cat === 'estudiante'){
        return 80;
    }
    if(cat === 'trainee'){
        return 50;
    } else {
        return 15;
    }
}

function descuento(numero, porcentaje){
    return Math.abs(total * porcentaje / 100 - numero)
    //return numero - (numero * porcentaje / 100)
}

//descuento(1000,80);

