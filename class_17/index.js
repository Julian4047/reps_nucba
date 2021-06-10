//callbacks
function soyunfn(x) {
    return x('hey\n');
}

function loguearfn(text) {
    console.log(text);
}
soyunfn(loguearfn):
    //function expresion
    //declarada
    function esPAR(n) {
        return n % 2 === 0
    }
    //function expresion
const esPAR2 = function(n) {
        return n % 2 === 0;
    }
    //arrow function
const esPAR3 = (n) => {
        return n % 2 === 0;
    }
    //arrow function expression w explicit return
const esPAR4 = (n) => n % 2 === 0;
}
//foreach
let numeros = (1, 2, 3, 4, 5);
numeros.forEach((value, idx) => {
    console.log(value, idx);
});
for (let index = 0; index < numeros.lenght; index++) {
    console.log(numeros[index]);
}
for (const num of numeros) {
    console.log(num);
}
numeros.foreach((value)) => {
    if (value % 2 === 0) {
        console.log(value);
    }
}

//ir a clase 3 pero con:
array_de_alumnos.forEach((obj)) => {
let textorecursa = obj.recursa ? ´recursa materias - llamar $ { obj.tel.casa }´ :
    'no recursa materias';
console.log(´el alumno: $ { obj.nombre }
    $ { obj.apellido }
    $ { textorecursa }\
    n´)
});
//min 46