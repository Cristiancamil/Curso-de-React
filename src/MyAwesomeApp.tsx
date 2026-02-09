import type { CSSProperties } from "react";

//===============================
// 📌 Datos personales
//===============================

const firstName = 'Cristian'
const lastName = 'Lopez'


//===============================
// 🎮 Preferencias del usuario
//===============================

const favoriteGames = ['Gear Of War', 'Call Of Dutty', 'Hallo', 'Need For Speed']
const isActive = true;


//===============================
// 📍 Información de dirección
//===============================

const address = {
  zipCode: 'ABC-123',
  country: 'Colombia'
}


//===============================
//  🎨 Estilos en línea
//===============================

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 20,
  padding: 10,
  marginTop: 30
}


/**
 * Componente funcional de React que muestra información personal, preferencias del usuario y su estado de actividad.
 * 
 * @component Indica que esta función es un componente de React
 * @returns {JSX.Element} Estructura visual que se renderiza en el DOM.
 * 
 * @example
 * <MyAwesomeApp />
 * 
 * @see firstName     - Datos del nombre mostrados en el título principal.
 * @see lastName      - Apellido mostrado como subtitulo.
 * @see favoriteGames - Lista de juegos favoritos renderizada como texto.
 * @see isActive      - Controla el mensaje "Activo" o "No activo".
 * @see address       - Información de dirección convertida a JSON.
 * @see myStyles      - Estilos CSS en línea aplicados al párrafo.
 * 
 */
export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName} </h1>
      <h3> {lastName} </h3>

      <p> {favoriteGames.join(', ')} </p>
      <h1> {isActive ? 'Activo' : 'No activo'} </h1>
      <p style={myStyles} > {JSON.stringify(address)} </p>
    </>
  )
}