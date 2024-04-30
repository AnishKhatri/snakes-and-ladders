export default function Snake({ curPosition, snake }) {

  const renderSnake = () => {
    let snakeClass = "snake";
    if (snake.startPos === curPosition) {
      snakeClass += ` start-pos ${snake.color}`;
    } else if (snake.endPos === curPosition) {
      snakeClass += ` end-pos ${snake.color}`;
    }
    return <div className={snakeClass}></div>
  }

  return snake ? renderSnake() : <></>;
}
