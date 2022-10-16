//invoco la funcion inicial
render();

//funcion inicial que dispara las demas funciones
function render() {
    console.log ('render()');

    //usar al componente navbar
    const htmlNavbar = Navbar('Mi primer seudo componente',buscar);/*le puedo agrego un parametro a la funcion Navbar y
                                                                    tambien una function, en este caso la funcion buscar*/
    document.getElementById('navbar').innerHTML = htmlNavbar;
}

//agrego la funcion buscar
function buscar(clave) {
    alert(`buscando algo en index.js: ${clave}`);
}

