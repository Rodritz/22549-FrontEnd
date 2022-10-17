//simulo ser otro componente
//la funcion Users me va a dibujar la tabla con los datos de USERS_DATA
function Users(userData) {//array de informacion con el cual voy a construir la tabla
    
    console.log(userData);

    const html = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
                ${userData.map(user => UserDataRow(user)).join('')}
            </tbody>
        </table>
    `;
    /*userData.map va a recorrer el vector USERS_DATA y me va a traer los datos
    solicitados por la funcion UserDataRow, y los va a cargar en el <tr>*/
    //${} es un template string
    return (
        html
    );
}

/*esta funcion va a dibujar un tr por cada array de elementos que contenga
USERS_DATA, volcando cada parametro solicitado*/
function UserDataRow(user) {
    const html = `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td><img src="${user.avatar}"></td>
        </tr>
    `;
    return (
        html
    )
}

