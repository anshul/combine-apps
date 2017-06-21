import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from 'tcomb-form';
import s from './styles';

import { AddUsers as addUsers } from '../../actions';

const Form = t.form.Form;

const Age = t.refinement(t.Number, (n) => n >= 0);

Age.getValidationErrorMessage = (value, path, context) => {
  return 'bad age';
};

const newUser = t.struct({
  playerName: t.String,
  playerAge: Age,
  playerCity: t.String,
});

const options = {
  fields: {
    playerName: {},
    playerAge: {},
    playerCity: {},
  }
}

class AddUser extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log('here');
    this.state = {
      value: {
        playerName: '',
        playerAge: '',
        playerCity: '',
      }
    }
    this.onChange = this.onChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        playerName: '',
        playerAge: '',
        playerCity: ''
      }
    }
  }

  onChange = (value) => {
    this.setState({
      value
    })
  }  

 handleAddUser = () => {
    const value = this.refs.form.getValue();
    // If the form is valid...
    if (value) {
      const data = {
        playerName: value.playerName,
        playerAge: value.playerAge,
        playerCity: value.playerCity,
      }

      console.log(data);

      console.log(this.props.Users);
      this.props.addUsers(data);
      /*
      // Serialize and post the data
      const json = JSON.stringify(data);
      fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      })
      .then((response) => response.json())
      .then(() => {
        alert('Success! You may now log in.');
        // Redirect to home screen
        this.props.navigator.pop();
      })
      .catch((error) => {
        alert('There was an error creating your account.');
      })
      .done()
    } else {
      // Form validation error
      alert('Please fix the errors listed and try again.') */
    }
  };

  render() {
    return (
    	<div>  
      <h1>Add User Form</h1>      
        <Form
          ref='form'
          type={newUser}
          options={options}
          value={this.state.value}
          onChange={this.onChange}
        />
        <input type="button" onClick={this.handleAddUser} value="Add User" />
      </div>
    );
  }
}

const selector = state => ({ Users: state.config.Users });

export default connect(selector, { addUsers })(AddUser);
