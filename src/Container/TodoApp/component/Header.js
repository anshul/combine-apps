import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

class Header extends PureComponent {
  constructor(props) {
    // console.log(props);
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <div>
        <h1>todos</h1>
        <TodoTextInput newTodo onSave={this.handleSave} placeholder="What needs to be done?" />
      </div>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Header;
