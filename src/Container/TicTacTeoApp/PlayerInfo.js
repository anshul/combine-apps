import React from 'react';
import PropTypes from 'prop-types';

import GameStatus from './component/GameStatus';

const PlayerInfo = props =>
  <GameStatus users={props.Users} turn={props.turn} contestants={props.contestants} finish={props.finish} players={props.players} onNewGameClick={props.onNewGameClick} onSetPlayers={props.onSetPlayers}/>;

PlayerInfo.propTypes = {
  turn: PropTypes.number.isRequired,
  finish: PropTypes.bool.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  contestants: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNewGameClick: PropTypes.func.isRequired,
  onSetPlayers: PropTypes.func.isRequired,
};

export default PlayerInfo;
