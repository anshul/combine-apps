import React from 'react';
import PropTypes from 'prop-types';

import GameStatus from './component/GameStatus';

const PlayerInfo = props =>
  <GameStatus
    turn={props.turn}
    contestants={props.contestants}
    playersData={props.playersData}
    finish={props.finish}
    onNewGameClick={props.onNewGameClick}
    onSetPlayers={props.onSetPlayers}
  />;

PlayerInfo.propTypes = {
  turn: PropTypes.number.isRequired,
  finish: PropTypes.bool.isRequired,
  playersData: PropTypes.arrayOf(PropTypes.object).isRequired,
  contestants: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNewGameClick: PropTypes.func.isRequired,
  onSetPlayers: PropTypes.func.isRequired,
};

export default PlayerInfo;
