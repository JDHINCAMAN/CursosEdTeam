console.log("Hola Mundo")

/**
 * Tipos de datos
 */

// Devuelve de que tipo es el dato
console.log("50 = " + typeof 50) 
console.log("Hola Mundo = " + typeof "Hola Mundo")
console.log("J = " + typeof 'J')
console.log("4.54 = " + typeof 4.54)
console.log("True o False = " + typeof true)

/**
 * Objetos: Colecciones de datos (informacion)
 * que tienen un identificador y un valor
 */
console.log("[Array] = " + typeof ["Juan", "Maria", "Angela", "Efrain", "Diegui"])

/**
 * Variables
 */
let programador // cuando no se le asigna un valor se con vierte en undefined
programador = "Juan"
console.log(programador)

/**
 * Constantes
 */
const NOMBRE_EMPRESA = "MinosIT"
console.log(NOMBRE_EMPRESA)

/**
 * Operadores ternarios
 */
let a = 5
let b = 7

let c = b > a ? "Es verdad" : "Es falso"
console.log(c)

/**
 * TYPE COERCION: Convertir un dato a otro tipo de dato
 */
let prueba = "holas"
let prueba2 = 58

console.log(prueba - prueba2) // NaN (Not a number)

/**
 * Condicionales
 */
console.log("--------------Ejemplo condicionales------------------------")
let nombre = "Juan David"
let edad = 16
let permiso = false

if (edad >=18 && edad < 65) {
    console.log(`${nombre} Puede asistir`)
} else if(edad <18 && permiso) {
    console.log(`${nombre} Puedes asistir, tienes el permiso`)
} else {
    console.log(`${nombre} No puede asistir`)
}

console.log("---------------------------Ejemplo 2 condicionales----------------------------")
let personaje = 3

switch (personaje) {
    case 1:
        console.log("Eres Goku")
        break
    case 2: 
        console.log("Eres Vegeta")
        break
    case 3:
        console.log("Eres trunks")
        break
    default:
        console.log("Eres una sabandija")
}

console.log("-----------------------Ejemplo de ciclo for---------------------------")
let number = 10
for (i = 0; i<=10; i+=2) {
    console.log(i)
}

for (n in nombre) {
    console.log(nombre[n])
}

/**
 * otra forma de hacerlo
 */
// for (let j = 0; j < nombre.length; j++) {
//     console.log(nombre[j])
// }

console.log("---------------------------Ejemplo while-------------------------")
let cosas = 5
while (cosas > 0) {
    cosas--
    console.log(`Hay ${cosas} cosas`)
}

console.log("----------------------Ejemplo Funciones-----------------------------------")
function saludar(){
    console.log("Esta es una funcion que saluda")
}

saludar()

console.log("----------------------Ejemplo Funciones con parametros-----------------------------------")
function suma(num1, num2) {
    let respuesta = num1+num2
    console.log(`El resultado de la suma es ${respuesta}`)
}
suma(80,674)

console.log("----------------------Ejemplo Funciones con return-----------------------------------")
function esPrimo(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
  }
  
function numerosPrimos(limite) {
    let numerosPrimos = [];
    for(let i = 2; i <= limite; i++) {
      if(esPrimo(i)) {
        numerosPrimos.push(i);
      }
    }
    return numerosPrimos;
  }
  
  console.log(numerosPrimos(10));


function descubrirNumero (numero, numeroEscoger) {
    for (let i =0; i<=numero; i++){
        if (i === numeroEscoger) {
            console.log(`Este es el numero ${i} lo he encontrado`)
        } else {
            console.log(`Este es el numero ${i}`)
        }
    }
}

descubrirNumero(10,4)

console.log("----------------------Ejemplo Funciones anonimas-----------------------------------")
const resta = function(num1, num2) {
    let respuesta = num1-num2
    return `El resultado de la resta es ${respuesta}`
}
console.log(resta(54,45))

/**
 * SCOPE es el alcance que tienen los datos en la ejecucion del script
 */

console.log("----------------------Ejemplo Funciones de fecha-----------------------------------")
const multiplicar = (num1, num2) => num1*num2
console.log(multiplicar(10,4))

const areaRectanguloFlecha = (base, altura) => {
    let area = base * altura;
    if (area <= 0) {
      //throw new Error('Las medidas deben ser positivas');
      return 'Las medidas deben ser positivas'
    }
    return area;
}
console.log(areaRectanguloFlecha(5, 4)); // Imprime 20
console.log(areaRectanguloFlecha(-1, 4)); // Lanza un error: "Las medidas deben ser positivas"

/**
 * Arrays
 */
console.log("----------------------Ejemplo Arrays-----------------------------------")
let amigos = ["Juan","Maria","Diego","Efrain","Angela"]
// Agregar elementos
amigos.push("Coco")
console.log(amigos)
// Elimina
amigos.pop()
console.log(amigos)

// Partir el array en 2 (No lo modifica, solo devuelve el resultado)
let amigosSlice = amigos.slice(0, 2)
console.log(amigosSlice)

// Recorrer el array (For each)
// for (amigo in amigos){
//     console.log(amigos[amigo])
// }

amigos.forEach(amigo => console.log(amigo))

/**
 * .map tiene la misma funcionalidad del foreach pero tiene
 * la cualidad de devolver otro array
 */
let amigosMap = amigos.map(amigo => {
    if(amigo === "Juan") {
        return amigo + " es el mejor"
    } else {
        return amigo
    }
})
console.log(".map")
console.log(amigosMap)

/**
 * Filter: devuelve un nuevo array sin afectar el array anterior
 */
let numeros = [4,547,25,14,325,-87,2547,66,448,2,148]
let numerosFilter = numeros.filter(num => num > 30)
console.log(".filter")
console.log(numerosFilter)

/**
 * Find, includes, some, every
 */
// devuelve el primer numero que cumpla esa validacion
let numerosFind = numeros.find(num => num%2===0)
console.log(".find")
console.log(numerosFind)

// dice si nuestro array incluye el dato que se esta buscando
let numerosIncludes = numeros.includes(46)
console.log(".includes")
console.log(numerosIncludes)

// comprobar si almenos un elemento del array cumple con una condicion
let numerosSome = numeros.some(num => num<0)
console.log(".some")
console.log(numerosSome)

// valida si todos los elementos cumplen con una condicion
let numerosEvery = numeros.every(num => num>80)
console.log(".every")
console.log(numerosEvery)


console.log("----------------------Ejemplo Strings-----------------------------------")
/**
 * Manipulacion de Strings
 */
// Partir el texto
let texto = "Juan David Hincapie Manrique"
let textoSlice = texto.slice(8, 20)
console.log(".slice")
console.log(textoSlice)

// separa un texto en palabras y devuelve un array
let textoSplit = texto.split("a")
console.log(".split")
console.log(textoSplit)

// necesita una expresion regular
let textoSearch = texto.search("a")
console.log(".search")
console.log(textoSearch)

/**
 * Metodos TO
 */
let ejemplo = "Hola Mundo"
let ejemploTo = ejemplo.toUpperCase()
console.log(ejemploTo)
ejemploTo = ejemplo.toLowerCase()
console.log(ejemploTo)

console.log("----------------------Ejemplo Objetos-----------------------------------")
/**
 * Objetos
 */
let alumno = {
    nombre: "Juan David",
    edad: 19,
    suscriptor: true,
    pais: "Colombia"
}
let valoresObjeto = Object.values(alumno)
console.log(valoresObjeto)

let keysObjeto = Object.keys(alumno)
console.log(keysObjeto)

console.log("----------------------Ejemplo Math y Date-----------------------------------")
let valor = Math.random()*30
console.log(valor)
valor = Math.PI
console.log(valor)
valor = Math.max(4,547,25,14,325,-87,2547,66,448,2,148)
console.log(valor)

let fecha = new Date()
console.log(fecha)