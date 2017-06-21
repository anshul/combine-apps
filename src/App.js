import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './Container';
import Sidebar from './partials/Sidebar';
import TodoApp from './Container/TodoApp';
import TicTacTeoApp from './Container/TicTacTeoApp';
import AddUser from './Container/AddUser';
import DisplayUser from './Container/DisplayUser';

import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <Container>
        <div style = {{ display:"flex" }}>
          <Sidebar />
        <Switch>flex-direction: row; 
          <Route path="/todo" exact component={TodoApp} />
          <Route path="/tictacteo" exact component={TicTacTeoApp} />
          <Route path="/addUser" exact component={AddUser} />
          <Route path="/displayUser" exact component={DisplayUser} />
          <Route component={() => <h1>Not found</h1>} />
        </Switch>
        </div>
      </Container>
    </Router>
  </Provider>;

export default App;

