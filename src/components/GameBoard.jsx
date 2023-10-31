const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelect = (rowi, coli) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowi][coli] = activePlayer;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowi) => (
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
