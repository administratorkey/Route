import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Página de inicio modo test
const Home = () => {
  return <h2>Bienvenido a la página de inicio de Manuel para el test</h2>;
};

// Página de modo test
const About = () => {
  return <h2>Esta es la página de Manuel para el test"</h2>;
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          {/* Navegación */}
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
          </ul>
        </nav>

        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
