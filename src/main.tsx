import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { MyAwesomeApp } from "./MyAwesomeApp";
// import { FirstStepsApp } from './FirstStepsApp';
import { MyAwesomeApp2 } from './MyAwesomeApp2';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstStepsApp /> */}
    <MyAwesomeApp2 />
  </StrictMode>,
)
