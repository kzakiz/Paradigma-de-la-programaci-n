// Funciones puras
function Suma(x){
    let accion = x + 5;
    return accion;
};

console.log(Suma(7));

function Dividir(x){
    let accion = x / 2;
    return accion;
};

console.log(Dividir(18))


// Funciones no puras

let resultado = 0;  
function SumarPrecios(a, b) {
    return resultado = resultado + a + b;
};

console.log(SumarPrecios(300, 143));
console.log(SumarPrecios(2, 5));
console.log(SumarPrecios(30, 13));
console.log(SumarPrecios(3, 43));

// Reto

let mensaje = "";
function Mensajes(a){
    return mensaje = mensaje + a;
};

console.log(Mensajes("Hola mundo"));
console.log(Mensajes(" ,como esta todo hoy"));

// Composicion funcional

function Multiplicar(a){
    return a * a;
};

function SumaDeLaMultiplicacion(num1, num2){
    return Multiplicar(num1) + Multiplicar(num2);
};

console.log(SumaDeLaMultiplicacion(3, 4));
