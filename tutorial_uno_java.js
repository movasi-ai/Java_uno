//console.log ("hola mundo"); // log es un método, como aprendí en C#, console es un objeto MDN buen lugar de documentación
//console.error("error fatal"); // investigar duplicación de líneas

//VARIABLES  var, let, const
//let para reasignar valores, const no cambia


// let age = 30;  /* así se debe inicializar una const, pero let deja solo declararla */
// const dos = 2;
//age = 22;

//let score;

//score=10;
//score=14;
//console.log (age, dos, score);
//simepre usa const a menos que sepas que vas a reasignar valores

//DATATYPES
//strings, numbers, boolean, null, indefined, symbol PRIMITIVE DATATYPES (DATA ASIGGNED TO MEMORY)


const age = 30
const rating = 4.5 //no floats in js
const isCool = true
const x = null;
const y = undefined 
let z; // same as undefined
//console.log(typeof x); 

/* STRINGS/CONCATENATION */
const nombre ='Luis'
const edad =31
 //console.log ('Mi nombre es ' + nombre+' y mi edad es ' + edad) // forma antigua

 //template strings

console.log(`Mi nombre es ${nombre} y tengo ${edad} años de edad`)

const s = 'hola mundo!!!'
//console.log (s.length) // length es una propiedad (no tiene parentesis), si tiene un parentesis es un método
//Un MÉTODO es una función asociada con un objeto OTROS : split (', ')


                //ARRAYS -VARIABLES THAT HOLD MULTIPLE VALUES//
//CONSTRUCTOR

const calif = new Array (5,9,8,7,6,6)
console.log(calif)

//más común

const frutas =["manzana", "pera", "naranja", "kiwi", "piña", 5] //different datatypes

// js no es staticly typed, no necesitas decir string, boolean, etc. . . {typescript}

// accesar un elemento
frutas [0] = "fresa" // reasigna el valor dentro del arreglo
frutas [6] = "platano" // agrega un sexto elemento
frutas [8] = "mango"  // como no hay siete, marca un espacio vacío empty (9)
frutas.push ("coco") // respeta el espacio vacio añade nuevo elemento al final 
/* nota: ESTAMOS ASIGNANDO UN MÉTODO (push) A UN ARREGLO arraymethods*/
frutas.unshift('uvas') // agrega un valor al inicio
frutas [8] = "durazno" //CUIDADO, ahora este es el ocho, el anterior ocho cambio porque usamos unshift
console.log (frutas [0]) // accesa el primer elemento y lo imprime en la consola
frutas.pop()
console.log (frutas)
console.log (Array.isArray(frutas)) //revisar si es un arreglo
console.log (frutas.indexOf('mango')) //regresa el index en el arreglo
console.log (frutas.indexOf('durazno')) //regresa el index en el arreglo

//object literal// key value pairs&&&&&&&&&&&&&&&&&&&&&&&&
                          
const luiso ={  
    pila: 'Toño',
    segundo:'Alvarado',
    isHandsome: true,
    años: 31,
    gustos: ["caminar", 'ajedrez', 'boxeo', 'videojuegos'],
    acciones: {
        correr: "izquierda",
        reaccionar: "bien",
        reflexionar: "tiempo",
    }
}
console.log (luiso.acciones, luiso.gustos, luiso.gustos[1], luiso.acciones.reflexionar)

/* sacar elementos */ const {isHandsome, acciones:{correr}} = luiso//y hacerlos variables
console.log (isHandsome, correr)
/* sumar propiedades */ luiso.resto = "1"
console.log (luiso)


//ARREGLOS DE object literals (plain Java objects)


const pendientes = [
    {
        id: 1,
        texto:'sacar la basura',
        estaHecho: true
    },
    {
        id: 2,
        texto:'enviar correo',
        estaHecho: true
    },
    {
        id: 3,
        texto:'hacer ejercicio',
        estaHecho: false
    },
];

console.log (pendientes[1].texto) //obtiene texto del arreglo de arriba

//usar JSON

const pendJSON = JSON.stringify(pendientes)
console.log (pendJSON) // muestra pendientes in JSON syntax


//For loops//

for (let i=0; i<10;i++) {
    console.log (`el numero del ciclo es: ${i}`) 
    
}

//while loops

let e=0;
while (e < 10) {
    
    console.log (`sigue mientras e es : ${e}`);
    e++;
}

for (let i=0; i<pendientes.length;i++) {
    console.log (pendientes[i].texto) 
    
}

// for ob

for ( let pen of pendientes) {
    
    console.log (pen.id) 
}


// high orden array methods

//forEch (loop throught), map(new array fro array), filter (new array for condition)

pendientes.forEach (function(todo){
    console.log (todo.texto);

});

const todoText = pendientes.map (function(todo){
    return todo.texto;
    
});
console.log (todoText);

const todoCompleted = pendientes.filter (function(todo){
    return todo.estaHecho===true;
    
}).map(function(todo){ // solo el texto de los completados 
    return todo.texto
})
console.log (todoCompleted);

// conditionals//

const q ='10'

if (q == 10) {
    console.log ('q es 10');
}

const c = 9

if (c === 10) { /// === matches the datatype
    console.log ('c es 10');
} else if (c>10){
    console.log ('x no es 10 pero es mayor')
} else {
    console.log('x no es diez pero es menor')
}

//multiple conditions

const g =7
const h =8

if (g> 6 || h <4 ) {
    console.log('g es mayor que 6')

}
if (g> 6 && h <4 ) {
    console.log('g es mayor que 5')

}

//Ternary operator assigned variables based on a condition

const u =10.5; //works with "floats"
const color = u>11 ? 'red': 'blue'

console.log (color)

//switches

switch(color){
    case 'red':
        console.log ("el color es rojo")
        break;
    case 'blue':
        console.log ("el color es azul")
        break;
    default:
        console.log ("no es ninguno de los dos")
        break;

}

//FUNCTIONS

function sumNums (num1,num2) {
    console.log (num1+num2)
}

sumNums (5,5)

// otra más común

function sumNums (num1,num2) {
   return num1+num2;
}

console.log (sumNums (5,5))

// ARROW FUNCTIONS

const restNums = (num1, num2) => num1-num2
console.log (restNums(5,3.5))
console.log (restNums(5,6))

const restNum = num1 => num1+2
console.log (restNum(5))
console.log (restNum(6))


// OOP construir objetos con cunstrctiong fuction (prototypes, ES6clases)


function Persona (hobbies, edad, ideología, ingresos, dob) {
    this.hobbies=hobbies
    this.edad=edad
    this.ideología=ideología
    this.ingresos=ingresos
    this.dob = new Date(dob)
    //agregar metodos(funciones) al objeto //ABAJO OTRA FORMA MEJOR
/*     this.getBirthYear = function () {
        return this.dob.getFullYear()
    }
    this.getFullName = function(){
        return `${this.hobbies} ${this.ideología}`
    } */
}

// con prototipos

Persona.prototype.obtIdeo = function (){
    return `${this.ideología}`
}

Persona.prototype.obtEdad= function (){
    return `${this.edad}`
}


//CLASSES

class Person {  
    constructor (firstName, lastName, fdn) {//metodo (una función dentro de una clase)
        this.firstName=firstName
        this.lastName=lastName
        this.fdn=new Date(fdn);
    }
    
    obtNombreCompleto () {   //lo mismo que el prototipo
        return `${this.firstName} ${this.lastName}`

    }
}

//instantiate object
const p1 = new Persona ('ajedrez', '30', 'izquierda radical', '8000/m', '23-12-1990')
const p2 = new Persona ('peliculas de terror', '40', 'conservador', '30000/m', '21-02-1989')
console.log ( p2.edad)
/*  console.log (p1.getBirthYear()) 
console.log (p2.getFullName()) */
console.log (p2) 
console.log (p2.obtIdeo()) // this workds
console.log (p1.obtEdad()) // this workds


const p4 = new Person ('Luis', 'Alvarado', '23-06-1990')
console.log (p4.firstName)
console.log (p4.obtNombreCompleto())


