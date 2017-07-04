import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class GameStatus extends React.PureComponent {
  constructor(props) {
    console.log(props);
    super(props);
    const options = props.playersData.map((user, index) => ({ value: user.Name, label: user.Name }));
    this.state = {
      value: [],
      disabled: true,
      options,
    };
    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChange = value => {
    this.setState({ value, disabled: value.length !== 2 });
    // console.log(this.state.value.length , this.bttn);
    // this.state.value.length >= 1 ? this.bttn.disabled = false : "";
  };

  onPress = event => {
    console.log('here', event);
    event.preventDefault();
    console.log('here inisde the click', this.state.value);
    this.props.onSetPlayers(this.state.value);
  };

  render() {
    return (
      <div className="row game-status">
        <div className="col-md-6 col-md-offset-3">
          {this.props.contestants[this.props.turn] === '' && this.props.playersData.length > 0
            ? <div>
                <Select
                  value={this.state.value}
                  name="chooseContestant"
                  options={this.state.options}
                  onChange={this.onChange}
                  multi
                />

                <button
                  ref={btn => (this.bttn = btn)}
                  className="btn btn-primary btn-block"
                  onClick={this.onPress}
                  disabled={this.state.disabled}
                >
                  Set Players
                </button>
              </div>
            : this.props.playersData.length > 0
              ? <h4>
                  {this.props.contestants[this.props.turn]}
                  {`'s Turn`}
                </h4>
              : ''}

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
  contestants: PropTypes.arrayOf(PropTypes.string).isRequired,
  playersData: PropTypes.arrayOf(PropTypes.object).isRequired,
  turn: PropTypes.oneOf([0, 1]).isRequired,
  finish: PropTypes.bool.isRequired,
  onNewGameClick: PropTypes.func.isRequired,
  onSetPlayers: PropTypes.func.isRequired,
};

export default GameStatus;
