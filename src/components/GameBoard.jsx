const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowi) => (
        <li key={rowi}>
          <ol>
            {row.map((playerSymbol, coli) => (
              <li key={coli}>
                <button
                  onClick={() => onSelectSquare(rowi, coli)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
