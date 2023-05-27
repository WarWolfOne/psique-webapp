import './App.css';
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
//Sidebar - Barra de Navegação.
import SideBar from './componentes/SideBar';
import PageTitle from './componentes/PageTitle';

function App() {
  return (
    <div className='App'>
      <header>
        <PageTitle
          title="Bem-Vindo"
        />
      </header>
      <body>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/meus-horarios" element={<Horarios />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </body>
    </div>
  )
}

export default App;