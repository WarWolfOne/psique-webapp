import './index.css';
//Sistema de navegação
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
//Paginas da navegação.
import Home from './screens/Home';
import Historico from './screens/Historico';
import Horarios from './screens/Horarios';
import Pacientes from './screens/Pacientes';
import Configuracoes from './screens/Configuracoes';
import Perfil from './screens/Perfil';
//Sidebar - Barra de Navegação.
import SideBar from './componentes/SideBar';
import PageTitle from './componentes/Header';
import Header from './componentes/Header';

function App() {
  return (
    <div className='App'>
      <header>
        <Header
          title="Bem-Vindo"
        />
      </header>
      <body>
        <SideBar />
        <div className='layout'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/meus-horarios" element={<Horarios />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
      </body>
    </div>
  )
}

export default App;