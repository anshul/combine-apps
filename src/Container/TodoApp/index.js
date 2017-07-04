import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './component/Header';
import MainSection from './component/MainSection';
import { addTodo, deleteTodo, completeTodo } from '../../actions';

const Todo = props =>
  <div>
    <Header addTodo={props.addTodo} />
    <MainSection todos={props.todos} deleteTodo={props.deleteTodo} completeTodo={props.completeTodo} />
  </div>;

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

const selector = state => ({ todos: state.todos });

export default connect(selector, { addTodo, deleteTodo, completeTodo })(Todo);
