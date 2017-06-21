import React from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';

const Users = t.enums.of('Audi Chrysler Ford Renault Peugeot');

const Form = t.form.Form;

const Select = t.struct({
  player: t.list(Users)
});

const options = {
  fields: {
    player: {
      factory: t.form.Select,
    }
  }
};

 

class GameStatus extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
  }

  onChange = (value) => {
    console.log(value);
  }  

  render() {
    return (
    <div className="row game-status">
    <div className="col-md-6 col-md-offset-3">

      {this.props.contestants[this.props.turn] === '' ? 
      <div>
      <Form
          ref='form'
          type={Select}
          onChange={this.onChange}
        />
      <button className="btn btn-primary btn-block" onClick={this.props.onSetPlayers}>Set Players</button></div> : null}
      <h4>{this.props.contestants[this.props.turn]}{`'s Turn`}</h4>
      {this.props.finish
        ? <button className="btn btn-primary btn-block" onClick={this.props.onNewGameClick}>
        
            New Game
          </button>
        : null}
    </div>
  </div>
    );
  }
}

GameStatus.propTypes = {
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  turn: PropTypes.oneOf([0, 1]).isRequired,
  finish: PropTypes.bool.isRequired,
  onNewGameClick: PropTypes.func.isRequired,
};

export default GameStatus;
