import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home';
import Pagina1 from './componentes/Pagina1';
import Pagina2 from './componentes/Pagina2';
import Pagina3 from './componentes/Pagina3';

export default function App() {

  return (
    <>
      <Router>
        <header>
          <Link to='/'>Home</Link>
          <Link to='/pag1'>Página 1</Link>
          <Link to='/pag2'>Página 2</Link>
          <Link to='/pag3'>Página 3</Link>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pag1' element={<Pagina1 />} />
          <Route path='/pag2' element={<Pagina2 />} />
          <Route path='/pag3' element={<Pagina3 />} />
        </Routes>
      </Router>
    </>
  );
}