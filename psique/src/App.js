import './App.css';
import './componentes/PageTitle.jsx';
import PageTitle from './componentes/PageTitle.jsx';
import Card from './componentes/Card';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <div>
      <div className='container'>
        <PageTitle
          title="Bem-Vindo"
        />
      </div>
      <div className='singlePage'>
        <Navbar />
        <Card 
          userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit tellus sit amet lacus consequat imperdiet.
          Nullam sodales facilisis nunc a consequat. In egestas orci in quam mollis, sed tempus leo pulvinar. Pellentesque accumsan
          vitae velit non tristique. Phasellus posuere ultrices faucibus. Nulla vestibulum eros nec ante consequat euismod. Fusce vel
          ligula suscipit, accumsan nunc et, congue nunc."
          buttonTitle="ENTRAR NA SALA"
        />
      </div>
    </div>
  );
}

export default App;
