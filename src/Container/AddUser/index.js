import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import t from 'tcomb-form';
import s from './styles';

import { AddUsers as addUsers } from '../../actions';

const Form = t.form.Form;

const Age = t.refinement(t.Number, n => n >= 0);

Age.getValidationErrorMessage = (value, path, context) => 'Please enter valid age';

class AddUser extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pickerOptions: t.enums({}),
      value: {
        playerName: '',
        playerAge: '',
        playerCity: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  /* componentWillUnmount() {
    this.setState = {
      value: {
        playerName: '',
        playerAge: '',
        playerCity: '',
      },
    };
  }*/

  componentDidMount() {
    // run your api call and once you have new value and options..
    // you can run your api call and update the state like this at any place - doesn't have to be componentDidMount
    const self = this;
    axios
      .get('http://ws.postcoder.com/pcw/PCW45-12345-12345-1234X/country?format=json')
      .then(response => {
        console.log(response.data);
        // ex.: { user: 'Your User'}

        let countriesList = [];

        response.data.map((countries, index) => (countriesList = [...countriesList, countries.countryname]));

        self.setState({
          pickerOptions: t.enums.of(countriesList),
          value: {
            playerCity: countriesList,
          },
        });

        // console.log(response.status);       // ex.: 200
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChange = value => {
    this.setState({
      value,
    });
  };

  getForm() {
    return t.struct({
      playerName: t.String,
      playerAge: Age,
      playerCity: this.state.pickerOptions,
    });
  }

  handleAddUser = () => {
    const value = this.form.getValue();
    // If the form is valid...
    if (value) {
      const data = {
        playerName: value.playerName,
        playerAge: value.playerAge,
        playerCity: value.playerCity,
      };

      // console.log(this.props.Users);
      this.props.addUsers(data);

      this.setState({
        playerName: '',
        playerAge: '',
        playerCity: '',
      });

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
      <s.div>
        <h1>Add User Form</h1>
        <Form ref={form => (this.form = form)} value={this.state.value} onChange={this.onChange} type={this.getForm()} />
        <s.button onClick={this.handleAddUser}>Add User</s.button>
      </s.div>
    );
  }
}

AddUser.propTypes = {
  // Users: PropTypes.shape({Users: PropTypes.arrayOf(PropTypes.string)}.isRequired,
  addUsers: PropTypes.func.isRequired,
};

// const selector = state => ({ Users: state.config.Users });
const selector = state => ({});

export default connect(selector, { addUsers })(AddUser);
