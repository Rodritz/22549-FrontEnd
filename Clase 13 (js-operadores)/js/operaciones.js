//comentario en js//
/*comentario en js*/

function saludar() { 
    alert('Hola mundo dentro de saludar');
}

/*operadores aritmeticos*/

//variable: espacio de memoria//
//sumar dos variables y mostrar su resultado//
let op1= prompt ('ingrese el valor de op1');//la funcion promt me devuelve un string
let op2= prompt ('ingrese el valor de op2');
let res; //declaro la variable
res= (+op1)+ parseInt(op2);
//tambien podria haber dicho "let res= op1 + op2"

console.log (res);//muestro el resultado por consola

//alert('resultado=' +res); //muestra alerta

