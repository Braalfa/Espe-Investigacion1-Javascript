const euclidianAlgorithm = require('./main').euclidianAlgorithm;
const mirrorWord = require('./main').mirrorWord;
const biggerThanAThousand = require('./main').biggerThanAThousand;
const forEach = require('./main').forEach;


test('maximo comun divisor entre 60 y 40 es 20', () => {
  expect(euclidianAlgorithm(60, 40)).toBe(20);
});

test('maximo comun divisor entre 7 y 5 es 1', () => {
  expect(euclidianAlgorithm(7, 5)).toBe(1);
});

test('maximo comun divisor entre 10 y 5 es menor a 10', () => {
  expect(euclidianAlgorithm(10, 5)).toBeLessThan(10);
});

test('espejo de "abcde" es "abcdeedcba"', () => {
  expect(mirrorWord("abcde")).toMatch(/abcdeedcba/);
});

test('espejo de un numero genera una excepcion', () => {
  expect(() => mirrorWord(323)).toThrow(Error);
});

test('1001 es mayor a 1000', () => {
  return expect(biggerThanAThousand(1001)).resolves.toBeTruthy();
});

test('1000 no es mayor a 1000', () => {
  return expect(biggerThanAThousand(1000)).resolves.not.toBeTruthy();
});

test('duplicacion de una lista', () => {
  let mockCallback = jest.fn(x => 2*x);
  expect(forEach([0, 1, 2, 3], mockCallback)).toEqual([0, 2, 4, 6]);
});

test('duplicacion de una lista', () => {
  let mockCallback = jest.fn(x => "Hola: " + x);
  expect(forEach(["Pedro", "Ana", "Pepe"], mockCallback)).toContain("Hola: Ana");
  expect(mockCallback.mock.calls.length).toBe(3);
  expect(mockCallback.mock.results[0].value).toEqual("Hola: Pedro");
});
