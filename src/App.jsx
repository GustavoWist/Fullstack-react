import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import eu from '/eu.jpg';
import Login from './login';
import Products from './products';
import Registrar_produto from './registrar_produto';
import ProductDetails from './ProductDetails';
import Dashboard from './Dashboard';
import Register from './Register';
import Ativacao from './Activate';
import Sales from './sales.jsx';
import SalesHistory from './SalesHistory';

// Rota protegida
function RotaProtegida({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('token');
  });

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" replace />} />

        
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

        <Route path="/ativar" element={<Ativacao />} />
        <Route path="/register" element={<Register />} />

        
        <Route
          path="/dashboard"
          element={
            <RotaProtegida isLoggedIn={isLoggedIn}>
              <Dashboard />
            </RotaProtegida>
          }
        />
        <Route
          path="/historico"
          element={
            <RotaProtegida isLoggedIn={isLoggedIn}>
              <SalesHistory />
            </RotaProtegida>
          }
        />
        <Route
          path="/produtos"
          element={
            <RotaProtegida isLoggedIn={isLoggedIn}>
              <Products />
            </RotaProtegida>
          }
        />
        <Route
          path="/registrar_produto"
          element={
            <RotaProtegida isLoggedIn={isLoggedIn}>
              <Registrar_produto />
            </RotaProtegida>
          }
        />
        <Route
          path="/vendas"
          element={
            <RotaProtegida isLoggedIn={isLoggedIn}>
              <Sales />
            </RotaProtegida>
          }
        />
        <Route
          path="/produto/:id"
          element={
            <RotaProtegida isLoggedIn={isLoggedIn}>
              <ProductDetails />
            </RotaProtegida>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
