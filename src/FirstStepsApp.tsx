import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 12 },
  { productName: 'Pro Controller', quantity: 19 },
  { productName: 'Super Smash', quantity: 18 },
  { productName: 'Super Mario', quantity: 5 },
  { productName: 'Mortal Combat 4', quantity: 35 }
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {
        itemsCart.map(item => (
          <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />
        ))
      }
    </>
  )
}