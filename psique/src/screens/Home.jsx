import '../index.css';
import Card from '../componentes/Card';

function Home() {
  return (
    <div>
      <Card
        userName="Jõao da Silva"
        userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit tellus sit amet lacus consequat imperdiet.
            Nullam sodales facilisis nunc a consequat. In egestas orci in quam mollis, sed tempus leo pulvinar. Pellentesque accumsan
            vitae velit non tristique. Phasellus posuere ultrices faucibus. Nulla vestibulum eros nec ante consequat euismod. Fusce vel
            ligula suscipit, accumsan nunc et, congue nunc."
        buttonTitle="Entrar na Sala"
      />
    </div>
  );
}

export default Home;