import { useState, useEffect } from "react";

const Player = ({ playerName, playerSymbol, activePlayer, getPlayer }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [player, setPlayer] = useState(playerName);
  const handleEditing = (e) => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleChange = (e) => {
    const updatedPlayer = e.target.value;
    setPlayer(updatedPlayer);
  };

  useEffect(() => {
    if (activePlayer) {
      getPlayer(player); // Pass the player's name when they are the active player
    }
  }, [activePlayer, player]);

  const setActive = activePlayer ? "active" : undefined;

  const playerNameField = isEditing ? (
    <input
      type="text"
      placeholder={playerName}
      onChange={handleChange}
      value={player}
    />
  ) : (
    <span className="player-name">{player}</span>
  );

  return (
    <li className={setActive}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
