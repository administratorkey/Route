import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Página de inicio
const Home = () => {
  return <h2>Esta es la página de inicio. Pon "/about/" para ir al la página de Manuel</h2>;
};

// Página de Manuel
const About = () => {
  return <h2>Esta es la página de Manuel. Pon solo "/" para ir a la página de inicio</h2>;
};

const App = () => {
  return (
    <Router>
      <div>
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
