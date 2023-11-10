const GameOver = ({ winner, hasDrawn, winnerName, restartTheGame }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {hasDrawn && <p>It is a draw!</p>}
      {!hasDrawn && (
        <p>
          {winnerName} ({winner}) won!
        </p>
      )}
      <button onClick={restartTheGame}>Rematch</button>
    </div>
  );
};

export default GameOver;
