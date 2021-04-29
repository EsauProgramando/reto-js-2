
const obtNumber = require('../src/ordenar');

test('validando la prueba unitaria de la funcion hello-world', () => {//
  const numbers = [2,34,67,12,4,43,28]   
  expect(obtNumber(numbers)).toEqual(67);
});