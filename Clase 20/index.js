//invoco la funcion inicial
render();

//disparar a las demas funciones
function render() {
    console.log('render()');

    //invoco al componente Navbar
    const htmlNavbar = Navbar('Mi primer pseudocomponente',buscar); //a la funcion navbar le paso una funcion por parametro
    document.getElementById('navbar').innerHTML = htmlNavbar;

    //ahora invoco a Users
    const htmlUsers = Users(USERS_DATA.data);
    document.getElementById('users').innerHTML = htmlUsers;
}

function buscar(clave) {
    // alert(`buscando algo en index.js: ${clave}`);

    /*la const usersFiltered va a filtrar el vector
    buscando la palabra clave. una vez encontrada, la const 
    htmlUsers equivale a Users(usersFiltered) y la tabla se va a dibujar
    con estos nuevos datos  */
    const usersFiltered = USERS_DATA.data.filter(user => user.first_name.includes(clave) || user.last_name.includes(clave));

    const htmlUsers = Users(usersFiltered);
    document.getElementById('users').innerHTML = htmlUsers;
}
