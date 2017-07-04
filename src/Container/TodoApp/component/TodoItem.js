import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from '../styles';

class TodoItem extends PureComponent {
  render() {
    const element = (
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
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
