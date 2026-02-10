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
   * el nombre y el apellido en el módulo.
   * 
   * Proceso del test:
   * 1. Se renderiza el componente en un entorno de pruebas.
   * 2. Se consulta el DOM renderizado.
   * 3. Se validan los textos visibles para el usuario.
   * 
   * Nota: Aunque se usa `container.querySelector`, en pruebas reales se
   * recomienda preferir métodos de `screen` como `getByText`.
   */
  test('should render firtsName and lastName', () => {

    // const { container } = render(<MyAwesomeApp />)
    // const h1 = container.querySelector('h1') 
    // const h3 = container.querySelector('h3')

    render(<MyAwesomeApp />)
    screen.debug()

    const h1 = screen.getByText('Cristian')
    const h3 = screen.getByText('Lopez')

    // Valida que los textos estén presentes en el documento
    expect(h1).toBeTruthy()
    expect(h3).toBeTruthy()
  })

}) 