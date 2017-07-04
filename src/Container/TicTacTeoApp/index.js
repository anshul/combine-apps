import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import s from './styles';
import Board from './Board';
import PlayerInfo from './PlayerInfo';

import { clearBoard, setContestant, markSquare } from '../../actions';

const TicTacTeo = props =>
  <div>
    <h1>Tic Tac Teo App</h1>
    <PlayerInfo
      turn={props.tictacteo.turn}
      contestants={props.tictacteo.contestants}
      finish={props.tictacteo.finish}
      onNewGameClick={props.clearBoard}
      onSetPlayers={props.setContestant}
      playersData={props.Users}
    />
    <Board board={props.tictacteo.board} onSquareClick={props.markSquare} />
  </div>;

TicTacTeo.propTypes = {
  tictacteo: PropTypes.shape({
    contestants: PropTypes.arrayOf(PropTypes.string),
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    onSquareClick: PropTypes.func,
    turn: PropTypes.oneOf([0, 1]),
    finish: PropTypes.bool,
    onNewGameClick: PropTypes.func,
    onSetPlayers: PropTypes.func,
  }).isRequired,
  Users: PropTypes.arrayOf(PropTypes.string).isRequired,
  markSquare: PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired,
  setContestant: PropTypes.func.isRequired,
};

const selector = state => ({ tictacteo: state.tictacteo, Users: state.config.Users });

export default connect(selector, { markSquare, clearBoard, setContestant })(TicTacTeo);
