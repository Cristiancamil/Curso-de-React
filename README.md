# React + TypeScript + Vite

Proyecto de práctica enfocado en el desarrollo de componentes en React usando TypeScript, 
documentación profesional con JSDoc y pruebas unitarias.

---

## Tecnologías utilizadas

- React  
- TypeScript  
- Vite  
- Vitest  
- React Testing Library  
- ESLint

---

## Configuración del proyecto
Este proyecto usa Vite como bundler y entorno de desarrollo.

### Ejecutar en local

```bash
npm install
npm run dev
```

### Ejecutar pruebas

```bash
npm run test
```

---

## Componente principal: MyAwesomeApp
Componente funcional de React que renderiza información personal, preferencias del usuario y su estado de actividad.

### ¿Qué es este componente?
MyAwesomeApp es un componente que muestra datos estáticos definidos dentro del módulo, incluyendo:
1. Nombre y apellido
2. Juegos favoritos
3. Estado de actividad
4. Dirección en formato JSON
5. Estilos aplicados en línea

---

## Documentación con JSDoc
El componente está documentado con JSDoc, lo que facilita el mantenimiento y la comprensión del código.

| Etiqueta | Función |
|---------|---------|
| `@component` | Indica que la función es un componente React |
| `@returns {JSX.Element}` | Define que retorna elementos JSX renderizados en pantalla |
| `@example` | Muestra cómo se usa el componente |
| `@see` | Referencia variables relacionadas utilizadas por el componente |

---

## Ejemplo de uso
```jsx
<MyAwesomeApp />
```

---

## Pruebas unitarias
Se implementan pruebas con Vitest y React Testing Library para validar que el componente se renderiza correctamente.

### Validaciones realizadas
- Que el nombre se muestre en el <h1>
- Que el apellido se muestre en el <h3>

Ejemplo de test:
```jsx
test('should render firstName and lastName', () => {
  const { container } = render(<MyAwesomeApp />)

  const h1 = container.querySelector('h1')
  const h3 = container.querySelector('h3')

  expect(h1?.innerHTML).toContain('Cristian')
  expect(h3?.innerHTML).toContain('Lopez')
})
```

---

## Conclusión

Este proyecto sirve como base para aprender:

- Arquitectura básica en React  
- Documentación técnica correcta  
- Testing de componentes  
- Buenas prácticas de desarrollo frontend  