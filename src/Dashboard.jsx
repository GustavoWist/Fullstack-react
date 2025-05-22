import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h2>Bem-vindo!</h2>

      <div className="card">
        <Link to="/produtos">
          <button>Produtos</button>
        </Link>
        <Link to="/registrar_produto">
          <button>Registrar Produto</button>
        </Link>
        <Link to="/vendas">
          <button>Vender Produto</button>
        </Link>
        <Link to="/historico">
          <button>Histórico de Vendas</button>
        </Link>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
