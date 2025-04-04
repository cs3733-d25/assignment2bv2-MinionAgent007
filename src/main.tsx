import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'

/* All <ts_filename> tags will be replaced by the file with the same name that you imported */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App/>
  </StrictMode>,
)