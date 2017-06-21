import React from 'react';
// import PropTypes from 'prop-types';
import s from './styles';
import Board from './Board';
import PlayerInfo from './PlayerInfo';
import { connect } from 'react-redux';
import { clearBoard, setContestant , markSquare } from '../../actions';


const TicTacTeo = (props) =>  
  <div>
  <h1>Tic Tac Teo App</h1>
    <PlayerInfo users={props.Users} turn={props.tictacteo.turn} contestants={props.tictacteo.contestants} finish={props.tictacteo.finish} players={props.tictacteo.players} onNewGameClick={props.clearBoard} onSetPlayers={props.setContestant}/>
	 <Board board={props.tictacteo.board} onSquareClick={props.markSquare}/>  
  </div>;

const selector = state => ({ tictacteo: state.tictacteo ,  Users: state.config.Users });

export default connect(selector, {markSquare , clearBoard , setContestant })(TicTacTeo);
