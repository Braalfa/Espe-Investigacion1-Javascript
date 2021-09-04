const euclidianAlgorithm = require('./main').euclidianAlgorithm;
const mirrorWord = require('./main').mirrorWord;
const biggerThanAThousand = require('./main').biggerThanAThousand;
const forEach = require('./main').forEach;

//----------------------------------------------------------------//

describe('tests de euclidianAlgorithm', () => {
  test('maximo comun divisor entre 60 y 40 es 20', () => {
    // Prueba para confirmar que el maximo comun divisor entre 60 y 40 es 20
    expect(euclidianAlgorithm(60, 40)).toBe(20);
  });
  
  test('maximo comun divisor entre 7 y 5 es 1', () => {
    // Prueba para confirmar que el maximo comun divisor entre 7 y 5 es 1
    expect(euclidianAlgorithm(7, 5)).toBe(1);
  });
  
  test('maximo comun divisor entre 10 y 5 es menor a 10', () => {
    // Prueba para confirmar que el maximo comun divisor entre 10 y 5 es menor a 10
    expect(euclidianAlgorithm(10, 5)).toBeLessThan(10);
  });
});

//----------------------------------------------------------------//

describe('tests de mirrorWord', () => {
  test('espejo de "abcde" es "abcdeedcba"', () => {
    // Prueba para confirmar que el espejo de "abcde" es "abcdeedcba"
    expect(mirrorWord("abcde")).toMatch(/abcdeedcba/);
  });
  
  test('espejo de un numero genera una excepcion', () => {
    // Prueba para el caso de una excepcion
    expect(() => mirrorWord(323)).toThrow(Error);
  });  
});

//----------------------------------------------------------------//

describe('tests de biggerThanAThousand', () => {
  test('1001 es mayor a 1000', () => {
    // Prueba que compara si 1001 es mayor a 1000
    return expect(biggerThanAThousand(1001)).resolves.toBeTruthy();
  });
  
  test('1000 no es mayor a 1000', () => {
    // Prueba que compara si 1000 es mayor a 1000
    return expect(biggerThanAThousand(1000)).resolves.not.toBeTruthy();
  });
});

//----------------------------------------------------------------//

describe('tests de forEach', () => {
  test('duplicacion de una lista', () => {
    // Funcion de mock para duplicar el valor de entrada
    let mockCallback = jest.fn(x => 2*x);
    // Prueba que compara la equivalencia entre los datos
    expect(forEach([0, 1, 2, 3], mockCallback)).toEqual([0, 2, 4, 6]);
  });
  
  test('concatenacion a los elementos de una lista', () => {
    // Funcion de mock para concatenar al valor de entrada
    let mockCallback = jest.fn(x => "Hola: " + x);
    // Prueba que compara si el resultado contiene el valor indicado
    expect(forEach(["Pedro", "Ana", "Pepe"], mockCallback)).toContain("Hola: Ana");
    // Prueba que analiza cuantas veces se llama a la funcion de mock
    expect(mockCallback.mock.calls.length).toBe(3);
    // Prueba que compara el primer valor retornado por la funcion de mock con lo esperado
    expect(mockCallback.mock.results[0].value).toEqual("Hola: Pedro");
  });
});
