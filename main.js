/**
 * Funcion para calcular el maximo comun divisor entre dos numeros
 * @param {*} a Numero
 * @param {*} b Numero
 * @returns Maximo comun divisor entre dos numeros
 */
function euclidianAlgorithm(a, b) {
    while (a !== b && a > 0 && b > 0) {
       if(a > b){
          [a, b] = [a - b, b]
       }else{
          [a, b] = [a, b - a]
       };
    };
    return Math.max(a, b)
 };

/**
 * Funcion para convertir una palabra en un palindromo al duplicarla
 * de manera inversa
 * @param {*} word Palabra a converir en un palindromo
 * @returns Palindromo
 */
function mirrorWord(word){
    let mirror = word;
    mirror += word.split("").reverse().join("")
    return mirror
}

/**
 * Funcion que indica si un numero es mayor que 1000 y se ejecuta de manera asincrona
 * @param {*} a Numero a comparar con 1000
 * @returns Promesa con el resultado booleano de la comparacion
 */
function biggerThanAThousand(a){
    return new Promise((resolve) => {
        setTimeout(function(){
         if(a > 1000){
            resolve(true);
         }else{
            resolve(false);
         }
        }, 250);
      });
}

/**
 * Funcion para aplicar una funcion a todos los elementos de una lista
 * @param {*} items Lista sobre la cual tomar los elementos
 * @param {*} fun Funcion a aplicar sobre los elementos
 * @returns Lista con los elementos alterados
 */
function forEach(items, fun) {
    return items.map(item => fun(item))
}  


/**
 * Se exportan las funciones
 */

module.exports.euclidianAlgorithm = euclidianAlgorithm
module.exports.mirrorWord = mirrorWord
module.exports.biggerThanAThousand = biggerThanAThousand
module.exports.forEach = forEach