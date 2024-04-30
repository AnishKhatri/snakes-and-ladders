import './App.css';
import Game from './components/Game';

export default function App() {
  const boardSize = 10;
  const crookedDice = false;

  return (
    <div className="App">
      <Game boardSize={boardSize} crookedDice={crookedDice} />
    </div>
  );
}
