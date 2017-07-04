import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './styles';

class DisplayUser extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('diap', this.props.Users);
  }

  render() {
    return (
      <s.parent>
        <h1>Users Info</h1>
        {this.props.Users.map((user, index) =>
          <s.div key={user.Name}>
            <p>
              {`User's Name is:`}
              {user.Name}
            </p>
            <p>
              {`User's Age is: `}
              {user.Age}
            </p>
            <p>
              {`User's City is: `}
              {user.City}
            </p>
          </s.div>,
        )}
      </s.parent>
    );
  }
}
DisplayUser.propTypes = {
  Users: PropTypes.arrayOf(PropTypes.array).isRequired,
  // addUsers: PropTypes.func.isRequired,
};

const selector = state => ({ Users: state.config.Users });

export default connect(selector, {})(DisplayUser);
