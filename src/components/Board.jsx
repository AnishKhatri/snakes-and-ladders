import Cell from "./Cell";
import Row from "./Row";

export default function Board({ boardSize, curPosition }) {

  const renderBoard = () => {
    let cellNumber = boardSize * boardSize;
    let rows = [];
    for (let i = 0; i < boardSize; i++) {
      let rowCells = [];
      for (let j = 0; j < boardSize; j++) {
        rowCells.push(
          <Cell key={j + i} cellNumber={cellNumber}
            hasPlayer={cellNumber === curPosition} />
        );
        cellNumber--;
      }
      rows.push(<Row key={i} rowCount={i}>{rowCells}</Row>);
    }
    return rows;
  }

  return (<>
    <div className="board">{renderBoard()}</div>
  </>);
}
