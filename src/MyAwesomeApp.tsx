import type { CSSProperties } from "react";

const firstName = 'Cristian'
const lastName = 'Lopez'

const favoriteGames = ['Gear Of War', 'Call Of Dutty', 'Hallo', 'Need For Speed']
const isActive = true;

const address = {
  zipCode: 'ABC-123',
  country: 'Colombia'
}

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 20,
  padding: 10,
  marginTop: 30
}

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(', ')}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  )
}