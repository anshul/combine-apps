import React from 'react';
import PropTypes from 'prop-types';

import Grid from './component/Grid';

const Board = props => <Grid board={props.board} onSquareClick={props.onSquareClick} />;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onSquareClick: PropTypes.func.isRequired,
};

export default Board;
