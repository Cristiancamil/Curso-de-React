/**
 * @module FirstStepsApp
 * Módulo principal que representa una aplicación básica de carrito de compras.
 * 
 * Este módulo:
 * - Define la estructura de los productos dentro del carrito
 * - Contiene una lista de productos simulados
 * - Renderiza un componente contador por cada producto
 */
import { ItemCounter } from "./shopping-cart/ItemCounter";

/**
 * Representa la estructura de un producto dentro del carrito.
 *
 * @interface ItemInCart
 * @property {string} productName - Nombre del producto.
 * @property {number} quantity - Cantidad disponible o agregada al carrito.
 */
interface ItemInCart {
  productName: string;
  quantity: number;
}

/**
 * Lista de productos simulados dentro del carrito de compras.
 * Se utiliza como fuente de datos para renderizar los contadores de cada producto.
 * 
 * @constant {ItemInCart[]} itemsCart
 */
const itemsCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 12 },
  { productName: 'Pro Controller', quantity: 19 },
  { productName: 'Super Smash', quantity: 18 },
  { productName: 'Super Mario', quantity: 5 },
  { productName: 'Mortal Combat 4', quantity: 35 }
]

/**
 * Componente principal que muestra un carrito de compras.
 *
 * Recorre la lista de productos y renderiza un componente `ItemCounter`
 * para cada uno, enviando el nombre y la cantidad como props.
 *
 * @component
 * @returns {JSX.Element} Fragmento JSX que contiene el título y la lista de contadores.
 *
 * @example
 * <FirstStepsApp />
 *
 * @see ItemCounter
 * @see ItemInCart
 */
export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {itemsCart.map(item => (
        <ItemCounter
          key={item.productName}
          name={item.productName}
          quantity={item.quantity}
        />
      ))}
    </>
  )
}