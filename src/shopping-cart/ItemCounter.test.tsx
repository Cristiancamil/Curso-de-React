import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

/** 
 * Suite de pruebas para el componente ItemCounter que
 * muestra el nombre del juego, incrementa o decrementa la cantidad.
*/
describe('ItemCounter', () => {

  /** 
   * Verifica que el componente renderice correctamente el nombre del juego.
   */
  test('should render whit default values', () => {

    const name = "Control de nintendo";

    //Renderiza el componente ItemCounter con la prop "name"
    render(<ItemCounter name={name} />);

    // Espera que quantity tenga algún valor menos undifined.
    expect(screen.getByText(name)).toBeDefined();

    // Espera que quantity tenga algún valor menos null.
    expect(screen.getByText(name)).not.toBeNull();
  })


  /**
   * Verifica que el componente renderice el nombre y la cantidad = 10.
   */
  test('should render whit default values', () => {

    const name = "Control de nintendo";
    const quantity = 10;

    // Renderiza el componente ItemCounter con las prop "name" y la prop "quantity"
    render(<ItemCounter name={name} quantity={quantity} />);

    // Espera que quantity tenga algún valor menos undifined.
    expect(screen.getByText(quantity)).toBeDefined();
  })

  /**
   * Verifica que el contador aumente en 1 cuando se presiona el botón "+1".
   */
  test('should increase count whit +1 button is pressed', () => {

    // Renderiza el componente ItemCounter con la prop "name" y la prop "quantity"
    render(<ItemCounter name={'Test item'} quantity={1} />);

    // Obtiene el botón de incrementar
    const [buttonsAdd] = screen.getAllByRole('button');

    // Dispara el evento click
    fireEvent.click(buttonsAdd);

    expect(screen.getByText('2')).toBeDefined();
  })

  /**
   * Verifica que el contador decremente en 1 cuando se presiona el botón "-1".
   */
  test('should decrease count when -1 button is pressed', () => {
    const quantity = 2
    // Renderiza el componente ItemCounter con la prop "name" y la prop "quantity"
    render(<ItemCounter name={'Test item'} quantity={quantity} />);

    // Obtiene el botón de decrementar
    const [, buttonsDecrease] = screen.getAllByRole('button');

    // Dispara el evento click
    fireEvent.click(buttonsDecrease);

    expect(screen.getByText('1')).toBeDefined();
  })

  /**
   * Verifica que el contador no decremente cuando se presiona el botón "-1" si cantidad es 1.
   */
  test('should not decrease count when -1 button is pressed and quantity is 1', () => {

    const quantity = 1;

    // Renderiza el componente ItemCounter con la prop "name" y la prop "quantity"
    render(<ItemCounter name={'Test item'} quantity={quantity} />);

    // Obtiene el botón de decrementar
    const [, buttonsDecrease] = screen.getAllByRole('button');

    // Dispara el evento click
    fireEvent.click(buttonsDecrease);

    expect(screen.getByText('1')).toBeDefined();
  })
})