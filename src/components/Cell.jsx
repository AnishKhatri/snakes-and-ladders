import Player from "./Player";
import Snake from "./Snake";
import SnakesData from "../data/snakes-data";

export default function Cell({ cellNumber, hasPlayer }) {

  const getSnakeData = () => {
    return SnakesData.find((snakeData) => {
      return snakeData.startPos === cellNumber || snakeData.endPos === cellNumber;
    });
  }

  return (
    <div className="cell">
      <Snake snake={getSnakeData()} curPosition={cellNumber} />
      {hasPlayer && <Player />}
      <div>{cellNumber}</div>
    </div>
  );
}
