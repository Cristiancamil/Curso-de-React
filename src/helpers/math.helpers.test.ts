import { describe, expect, test } from 'vitest'
import { multiply, substract, sum } from './math.helpers'

// AGRUPACIÓN DE PRUEBAS AUTOMÁTICAS PARA LA FUNCIÓN SUMA
describe('sum', () => {
  /**
   * Prueba 1 automática de la función sumar
   * 1. Llamar la función (const result = sum(1, 5);)
   * 2. Validar si el resultado es el esperado, expect espera un resultado y se valida que sea un número 6
  */
  test('Prueba 1 de la función sumar', () => {
    // ! 1. Arrange = Preparar
    const a = 1;
    const b = 5;

    // ! Act = Actuar
    const result = sum(a, b);

    // ! Asert = Afirmar
    expect(result).toBe(a + b);
  })

  /**
   * Prueba 2 automática de la función sumar
   * 1. Llamar la función (const result = sum(10, 2);)
   * 2. Validar si el resultado es el esperado, expect espera un resultado y se valida que sea un número 12
  */
  test('Prueba 2 de la función sumar', () => {
    // ! 1. Arrange = Preparar
    const a = 10;
    const b = 2;

    // ! Act = Actuar
    const result = sum(a, b);

    // ! Asert = Afirmar
    expect(result).toBe(a + b);
  })

  /**
   * Prueba 3 automática de la función sumar
   * 1. Llamar la función (const result = sum(2, 6);)
   * 2. Validar si el resultado es el esperado, expect espera un resultado y se valida que sea un número 8
  */
  test('Prueba 3 de la función sumar', () => {
    // ! 1. Arrange = Preparar
    const a = 2;
    const b = 6;

    // ! Act = Actuar
    const result = sum(a, b);

    // ! Asert = Afirmar
    expect(result).toBe(a + b);
  })
})

// AGRUPACIÓN DE PRUEBAS AUTOMÁTICAS PARA LA FUNCIÓN RESTA
describe('substract', () => {
  /**
   * Prueba 1 automática de la función restar
   * 1. Llamar la función (const result = substract(4, 3);)
   * 2. Validar si el resultado es el esperado, expect espera un resultado y se valida que sea un número 1
  */
  test('prueba 1 de la función resta ', () => {
    // ! Arragnge = Preparar
    const a = 4
    const b = 3

    // ! Act = Actuar
    const result = substract(a, b)

    // ! Assert = Afirmar
    expect(result).toBe(a - b)
  })

  /**  
   * Prueba 2 automática de la función restar
   * 1. Llamar la función (const result = substract(9, 5);)
   * 2. Validar si el resultado es el esperado, expect espera un resultado y se valida que sea un número 4
  */
  test('Prueba 2 de la función restar', () => {
    // ! Arrange = Preparar
    const a = 9
    const b = 5

    // ! Act = Actuar
    const result = substract(a, b)

    // ! Assert = Afirmar
    expect(result).toBe(a - b)
  })

  /** 
   * Prueba 3 automática de la función restar
   * 1. Llamar a la función (const result = substract(17, 2);)
   * 2. Validar si el resultado es el esperado, expect espera un resultado y se valida que sea un número 15
  */
  test('Prueba 3 de la función restar', () => {
    // ! Arrange = Preparar
    const a = 17
    const b = 2

    // ! Act = Actuar
    const result = substract(a, b)

    // ! Assert = Afirmar
    expect(result).toBe(a - b)
  })
})

// AGRUPACIÓN DE PRUEBAS AUTOMÁTICAS PARA LA FUNCIÓN MULTIPLICAR
describe('multiply', () => {
  /** 
   * Prueba 1 de la función multiplicar
   * 1. Llamar a la función (const result = multiply(8, 14);)
   * 2. Validar si el resultado es el esperado, expect espera un resultado y se vaida que sea un número 112
  */
  test('Prueba 1 de la función multiplicar ', () => {
    // ! Arrange = Preparar
    const a = 8
    const b = 14

    // ! Act = Actuar
    const result = multiply(a, b)

    // ! Assert = Afirmar
    expect(result).toBe(a * b)
  })

  /** 
   * Prueba 2 de la función multiplicar
   * 1. Llamar a la función (const result = multiply(2, 2);)
   * 2. Validar si el resultado es el esperado, expect espera un resultado y se vaida que sea un número 4
  */
  test('Prueba 2 de la función multiplicar ', () => {
    // ! Arrange = Preparar
    const a = 2
    const b = 2

    // ! Act = Actuar
    const result = multiply(a, b)

    // ! Assert = Afirmar
    expect(result).toBe(a * b)
  })

  /** 
 * Prueba 3 de la función multiplicar
 * 1. Llamar a la función (const result = multiply(7, -5);)
 * 2. Validar si el resultado es el esperado, expect espera un resultado y se vaida que sea un número -35
*/
  test('Prueba 3 de la función multiplicar ', () => {
    // ! Arrange = Preparar
    const a = 7
    const b = -5

    // ! Act = Actuar
    const result = multiply(a, b)

    // ! Assert = Afirmar
    expect(result).toBe(a * b)
  })

})