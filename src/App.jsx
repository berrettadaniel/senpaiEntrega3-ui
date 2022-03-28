//Importacion de componentes

import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './components/pages/IndexPage';
import { OfrecemosPage } from './components/pages/OfrecemosPage';
import { LoginPage } from './components/pages/LoginPage';
import { ContactoPage } from './components/pages/ContactoPage';
import { ServicioPage } from './components/pages/ServicioPage'

export function App() {
    return(
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="ofrecemos" element={<OfrecemosPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacto" element={<ContactoPage />} /> 
            <Route path="servicio/:id" element={<ServicioPage />} />
        </Routes>
    );
}
