import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom'
import './index.css'

import { DetalleInstrumento } from './components/pages/DetalleInstrumento.tsx'
import Home from './components/home/Home.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz redirige a /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Rutas de detalle */}
        <Route path="/detalle/:idInstrumento" element={<DetalleInstrumento />} />
                
        {/* Página Home */}
        <Route path="/home" element={<Home />} />
        
        {/* Captura cualquier otra ruta no definida */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

