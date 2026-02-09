import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

/** 
 * Suite de pruebas para el componente MyAwesomeApp.
 * Verifica que la información principal del componente
 * se renderice corractamente en el DOM virtual de pruebas.
 */
describe('MyAwesomeApp', () => {

  /**
   * Verifica que el componente muestre correctamente 
   * el nombre y el apellido en las variables.
   * 
   * Proceso del test:
   * 1. Se renderiza el componente en un entorno de pruebas.
   * 2. Se obtiene el contenedor raíz del DOM virtual.
   * 3. Se buscan las etiquetas <h1> y <h3>.
   * 4. Se valida que contengan los textos esperados.
   * 
   * @constant {HTMLElement} container - Nodo raíz que contiene el HTML renderizado del componente.
   * @function screen.debug - Muestra en consola la estructura HTML generada (solo para depuración).
   * @constant {HTMLHeadingElement | null} h1 - Primer elemento <h1> encontrado en el DOM.
   * @constant {HTMLHeadingElement | null} h3 - Primer elemento <h3> encontrado en el DOM.
   */
  test('should render firtsName and lastName', () => {

    const { container } = render(<MyAwesomeApp />)
    screen.debug()

    const h1 = container.querySelector('h1')
    const h3 = container.querySelector('h3')

    // Valida que el <h1> contenga el nombre esperado
    expect(h1?.innerHTML).toContain('Cristian')

    // Valida que el <h3> contenga el apellido esperado
    expect(h3?.innerHTML).toContain('Lopez')
  })

}) 