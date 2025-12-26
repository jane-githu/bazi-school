import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  <BrowserRouter basename="/bazi-school">  {/* <--- 加上这一句 */}
  <App />
</BrowserRouter>
)
