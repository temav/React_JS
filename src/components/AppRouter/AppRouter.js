import React, {Component} from 'react';
import Search from '../Search';
import {connect} from 'react-redux';

class AppRouter extends Component {
    render() {
        return (
        <div className='App'>
            <Search/>
        </div>);
    }
}

// const mapStateToProps = state => ({
//     serials: state.serials
// })

// const mapDispatchToProps = () => {}

export default AppRouter;