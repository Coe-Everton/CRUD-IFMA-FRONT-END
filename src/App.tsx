import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Dicentes from './pages/Dicentes';
import Docentes from './pages/Docentes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/dicentes" element={<Dicentes />} />
        <Route path="/docentes" element={<Docentes />} />
      </Routes>
    </BrowserRouter>
  );
}

