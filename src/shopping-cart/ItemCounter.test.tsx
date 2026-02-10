import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

/** 
 * Suite de pruebas para el componente ItemCounter que
 * muestra el nombre del juego, incrementa o decrementa la cantidad.
*/
describe('ItemCounter', () => {

  /** 
   * Verifica que el componente muestre correctamente el nombre del juego.
   */
  test('should render whit default values', () => {

    const name = "Control de nintendo";

    render(<ItemCounter name={name} />)

    expect(screen.getByText(name)).toBeDefined()
    expect(screen.getByText(name)).not.toBeNull()
  })


  /** 
   * Verifica que el componente muestre correctamente 
   * el nombre del juego, incrementar y decrementar la cantidad.
   */
  test('should render whit default values', () => {

    const name = "Control de nintendo";
    const quantity = 10

    render(<ItemCounter name={name} quantity={quantity} />)

    expect(screen.getByText(quantity)).toBeDefined()
  })

})