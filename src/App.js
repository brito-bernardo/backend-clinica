import './App.css';
import Login from './pages/Login';
import ForgotPassword from './pages/Forgotpassword';
import DefaultPage from './components/DefaultPage';
import Home from './pages/Home';
import Prontuario from './pages/Prontuario'
import Diagnostico from './pages/Diagnostico';
import Perfil from './pages/Perfil';
import CadastroUser from './pages/CadastroUser'
import TableProntuario from './pages/TableProntuario';
import TableDiagnostico from './pages/TableDiagnostico';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App flex">
      <Router>
        <Routes>
          <Route path='/' element={<DefaultPage/>}>
            <Route path='/' element={<Home />} />
            <Route path='/prontuario' element={<Prontuario />} />
            <Route path='/diagnostico' element={<Diagnostico />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/prontuariolist' element={<TableProntuario />} />
            <Route path='/diagnosticolist' element={<TableDiagnostico />} />
            <Route path='/cadastrouser' element={<CadastroUser />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
