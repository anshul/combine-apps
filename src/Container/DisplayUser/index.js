import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './styles';

class DisplayUser extends React.PureComponent {
  constructor(props) {
    super(props);
     console.log('diap',this.props.Users);
}

  render() {
    return (
      <div>
       {this.props.Users.map((user,index)=>
				<div key={index}>
	                <p>User's Name is: {user.Name}</p>
	                <p>User's Age is: {user.Age}</p>
	                <p>User's City is: {user.City}</p>
            	</div>
			)}
      </div>
    );
  }
}

const selector = state => ({ Users: state.config.Users });

export default connect(selector, {})(DisplayUser);