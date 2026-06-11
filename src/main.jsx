import { MovieProvider } from "./contexts/MovieContext";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import { HashRouter } from "react-router-dom" 
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <HashRouter >
        <App />
      </HashRouter>
    </MovieProvider>
  </StrictMode>
);
