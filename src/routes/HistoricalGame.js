import React from 'react';

const HistoricalGame = (props) => {
  const { match } = props;

  return (
    <div>
      <p>Component displaying history of the game with id: { match.params.gameId }</p>
      <p>View README.md for more details.</p>
    </div>
  );
};

export default HistoricalGame;
