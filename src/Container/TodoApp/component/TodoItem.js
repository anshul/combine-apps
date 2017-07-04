import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';
import { deleteTodo } from '../../../actions';
import s from '../styles';

class TodoItem extends Component {
  constructor(props) {
    // console.log(props);
    super(props);
    // this.handleSave = this.handleSave.bind(this);
  }

  /* handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    }
  }*/

  render() {
    let element;
    element = (
      <s.div>
        <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.deleteTodo(this.props.todo.id)} />
        {this.props.todo.text}
      </s.div>
    );

    return (
      <li>
        {element}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
