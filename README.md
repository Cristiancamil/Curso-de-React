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
Este componente está documentado usando JSDoc, lo que permite que otros desarrolladores entiendan rápidamente su propósito.

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

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
