import React, { Component } from 'react';
import { searchRequest } from '../../actions/search';
import { connect } from 'react-redux';
import { getIsLoading, getData, getError } from '../../reducers/search';
import ShowPreview from '../ShowPreview';
import { Link, withRouter} from 'react-router-dom';
import './Search.css';

class Search extends Component {
    state = {
        value: '',
    };

    handleSearch = () => {
        this.props.searchRequest(this.state.value);
        console.log('handle isload', this.props.isLoading);
    };

    handleOnChange = (event) => {
        this.setState({value: event.target.value})
    };

    render () {
        const {isLoading, data, error} = this.props;

        if(isLoading) return(<p>Загрузка данных</p>);
        
        if(error) return(<p>{error}</p>);
        console.log('render isload', isLoading);
        console.log('render data', data);
        return (
        <div className="search">
            <div className="search_tab">
                <input onChange={this.handleOnChange} value={this.state.value} placeholder="Название..."/><button onClick={this.handleSearch}>Найти!</button>
            </div>
            <div>
                {data.length!==0 && data.map((item,i)=><Link key={i} to={`show/${item.id}`}><ShowPreview key={i} {...item}/></Link>)}
            </div>
            {console.log('ebal', data)}
        </div>);
    }
}

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state),
    data: getData(state),
    error: getError(state)
}); 

export default withRouter(connect(mapStateToProps, {searchRequest})(Search));