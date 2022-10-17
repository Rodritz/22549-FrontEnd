//invoco la funcion inicial
render();

//disparar a las demas funciones
function render() {
    console.log('render()');

    //usar al componente Navbar
    const htmlNavbar = Navbar('Mi primer pseudocomponente',buscar);
    document.getElementById('navbar').innerHTML = htmlNavbar;

    //ahora invoco a 
    const htmlUsers = Users(USERS_DATA.data);
    document.getElementById('users').innerHTML = htmlUsers;
}

function buscar(clave) {
    // alert(`buscando algo en index.js: ${clave}`);

    //data.js > USER_DATA.data
    //funciones flecha / arrow function
    const usersFiltered = USERS_DATA.data.filter(user => user.first_name.includes(clave) || user.last_name.includes(clave));

    const htmlUsers = Users(usersFiltered);
    document.getElementById('users').innerHTML = htmlUsers;
}
