export default function Cell({ rowCount, children }) {

  return (
    <div className={rowCount % 2 === 0 ? "row" : "row reverse"}>
      {children}
    </div>
  );
}
