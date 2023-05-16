import './App.css';
import './index.css';
import './componentes/PageTitle.jsx';
import PageTitle from './componentes/PageTitle.jsx';
import Card from './componentes/Card';
import SideBar from './componentes/SideBar';

function App() {
  return (
    <div>
      <header>
        <PageTitle
          title="Bem-Vindo"
        />
      </header>
      <body>
          <SideBar />
          <Card
            userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit tellus sit amet lacus consequat imperdiet.
            Nullam sodales facilisis nunc a consequat. In egestas orci in quam mollis, sed tempus leo pulvinar. Pellentesque accumsan
            vitae velit non tristique. Phasellus posuere ultrices faucibus. Nulla vestibulum eros nec ante consequat euismod. Fusce vel
            ligula suscipit, accumsan nunc et, congue nunc."
            buttonTitle="Entrar na Sala"
          />
      </body>
    </div>
  );
}

export default App;
