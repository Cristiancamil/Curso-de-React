import { useState } from "react"
import styles from './ItemCounter.module.css'

/**
 * Interfaz que define las propiedades que recibe el componente ItemCounter
 *
 * @interface ItemCounterProps
 * @property {string} name - Nombre del producto
 * @property {number} [quantity=1] - Cantidad inicial del producto
 */
interface ItemCounterProps {
  name: string;
  quantity?: number
}

/**
 * Componente de interfaz que permite incrementar o decrementar la cantidad de un producto.
 * 
 * Muestra el nombre del producto, la cantidad actual, y botones para sumar o restar unidades.
 * La cantidad nunca puede ser menor a 1.
 *
 * Características:
 * - Usa estado interno con `useState`
 * - Cambia el color del nombre del producto cuando la cantidad es mínima (rojo)
 * - Recibe valores iniciales mediante props
 * 
 * @component
 * @param {Props} props - Propiedades del componente
 * @returns {JSX.Element} Fila de producto con controles de cantidad
 *
 * @example
 * <ItemCounter name="Nintendo Switch 2" quantity={5} />
 *
 * @see FirstStepsApp
 */
export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {

  /**
   * Estado que almacena la cantidad actual del producto.
   * Se inicializa con el valor recibido por la props quantity.
   */
  const [count, setCount] = useState(quantity)

  /**
   * Incrementa la cantidad del producto en 1 unidad.
   */
  const handleAdd = () => {
    setCount(count + 1);
  }

  /**
   * Decrerementa la cantidad del producto en 1 unidad.
   * Evita que el valor sea menor a 1.
   */
  const handleSubtract = () => {
    if (count === 1) return
    setCount(count - 1)
  }

  return (
    <>
      <section className={styles['item-row']}>
        <span
          className={styles['style-text']}
          style={{
            color: count === 1 ? 'red' : 'black'
          }}
        >
          {name}
        </span>
        <button onClick={handleAdd}>+1</button>
        <span>{count}</span>
        <button onClick={handleSubtract}>-1</button>
      </section>
    </>
  )
}
