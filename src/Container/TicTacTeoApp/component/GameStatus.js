import React from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';

const users = t.enums.of(['Nitu', 'Anil', 'Jahnavi'], 'users');

const Form = t.form.Form;

const Select = t.struct({
  player: t.list(users),
});

const options = {
  fields: {
    player: {
      attrs: {
        placeholder: 'Select Player',
        onFocus: () => {
          console.log('select player in focus');
        },
        onBlur: () => {
          console.log('select player out focus');
        },
        className: 'basic_element',
      },
      factory: t.form.Select,
    },
  },
};

class GameStatus extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contestantName: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChange = value => {
    // console.log(value.player[0]);
    const contestantName = [...this.state.contestantName, value.player[0]];
    this.setState({ contestantName });
  };

  onPress = event => {
    event.preventDefault();
    // console.log('here inisde the click',this.state.contestantName);
    this.props.onSetPlayers(this.state.contestantName);
  };

  render() {
    return (
      <div className="row game-status">
        <div className="col-md-6 col-md-offset-3">

          {this.props.contestants[this.props.turn] === ''
            ? <div>
                <Form ref="form" type={Select} options={options} onChange={this.onChange} />
                <button className="btn btn-primary btn-block" onClick={this.onPress}>Set Players</button>
              </div>
            : <h4>{this.props.contestants[this.props.turn]}{`'s Turn`}</h4>}

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
  onSetPlayers: PropTypes.func.isRequired,
};

export default GameStatus;
