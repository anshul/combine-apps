import React from 'react';
// import PropTypes from 'prop-types';
import s from './styles';
import Board from './Board';
import PlayerInfo from './PlayerInfo';
import { connect } from 'react-redux';
import { clearBoard, setContestant , markSquare } from '../../actions';


const TicTacTeo = (props) =>  
  <div>
    <Board board={props.tictacteo.board} onSquareClick={props.markSquare}/>
    <PlayerInfo turn={props.tictacteo.turn} contestants={props.tictacteo.contestants} finish={props.tictacteo.finish} players={props.tictacteo.players} onNewGameClick={props.clearBoard} onSetPlayers={props.setContestant}/>
  </div>;

const selector = state => ({ tictacteo: state.tictacteo });

export default connect(selector, {markSquare , clearBoard , setContestant })(TicTacTeo);
