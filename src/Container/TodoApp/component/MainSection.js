import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class MainSection extends PureComponent {
  render() {
    return (
      <section>
        <ul>
          {this.props.todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} completeTodo={this.props.completeTodo} />,
          )}
        </ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default MainSection;
