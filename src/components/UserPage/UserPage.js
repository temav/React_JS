import React, {Component} from 'react';
import { fetchUserRequest } from '../../actions/user';
import { connect } from 'react-redux';
import { getData } from '../../ducks/user';

class UserPage extends Component {
    render() {
        const {fetchUserRequest, data} = this.props;
        // fetchUserRequest(login)
        return <div>UserPage</div>;
    }
}

const mapPropsToState = (state) => ({
    data: getData(state)    
})

export default connect(mapPropsToState, {fetchUserRequest})(UserPage);