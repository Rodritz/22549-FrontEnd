/*const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', dibujarDatosPersona);*/

document.getElementById('btnBuscar').addEventListener('click',dibujarDatosPersona);

function buscarDatos() {
    //simulo que busque en un api rest!!!
    const persona = {
        dni: 1234,
        nombre: 'carlos',
        direcciones: [
            {
                calle: 'calle1',
                altura: 1234,
                tipo: 'postal'
            },
            {
                calle: 'calle2',
                altura: 1235,
                tipo: 'legal'
            }
        ],
        cuenta: {
            tipo: 'cc',
            nro: '012-132132-21321'
        }
    };

    return persona;
}


function dibujarDatosPersona() {

    //obtengo los datos desde "api rest"
    const res = buscarDatos();

    const datosPersona = DatosPersona(res.dni, res.nombre); //llamamos a la primer funcion

    const direcciones = DireccionesPersona(res.direcciones);

    const cuenta = DatosCuentaPersona(res.cuenta);

    /*creamos una funcion render para crear un objeto, 
    y le pasamos los parametros que va a devolver*/
    render({
        datosPersona: datosPersona,
        direcciones: direcciones,
        cuenta: cuenta,
    });
}

/*la funcion DatosPersona va a recibir el objeto 
que necesito, en este caso dni y nombre*/
function DatosPersona(dni, nombre) {
    const html = `<p>${nombre} - ${dni}</p>`;
    return html;
}
/*
<ul>
    <li>calle,altura,tipo</li>
    ...
</ul>
*/
function DireccionesPersona(direcciones) {    
    let html = '<ul>';//alt+96 para las comillas invertidas, que me permite concatenar variables en un string
    const dirs = direcciones.map(d => `<li>${d.calle},${d.altura},${d.tipo}</li>`);
    html += dirs.join(''); //array.join sirve para unir los string
    //for! 
    //forEarch
    //join es un metodo de los arrays
    html += '</ul>'; //cerramos el <ul>
    return html;
}

function DatosCuentaPersona(cuenta) {
    const html = `<p>Tipo: ${cuenta.tipo}</p>
        <p>Nro: ${cuenta.nro}</p>`;
    return html;
}

function render(props) {
    document.getElementById('datos-persona').innerHTML = props.datosPersona;
    document.getElementById('direcciones-persona').innerHTML = props.direcciones;
    document.getElementById('cuenta-persona').innerHTML = props.cuenta;
}

/////////////////////////

const persona = {
    dni: 1234,
    nombre: 'carlos',
    direcciones: [
        {
            calle: 'calle1',
            altura: 1234,
            tipo: 'postal'
        },
        {
            calle: 'calle2',
            altura: 1235,
            tipo: 'legal'
        }
    ],
    cuenta: {
        tipo: 'cc',
        nro: '012-132132-21321'
    }
};

console.log(persona);

//con JSON.stringify transformo un objeto a texto
const personaJsonText = JSON.stringify(persona);
console.log(personaJsonText);

//con JSON.parse transformo un texto a objeto
const otraPersona =JSON.parse(personaJsonText);
console.log(otraPersona);



