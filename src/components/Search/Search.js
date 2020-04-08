import React, { Component } from 'react';
import { searchRequest } from '../../actions/search';
import { connect } from 'react-redux';
import { getIsLoading, getData, getError } from '../../reducers/search';
import ShowPreview from '../ShowPreview';
import { Link, Route} from 'react-router-dom';
import './Search.css';

class Search extends Component {
    state = {
        value: '',
    };
    // constructor (props) {
    //     super(props);
    //     const { searchRequest, isLoading } = this.props;
    //     // if (!isLoading) searchRequest('Breaking');
    // }
    handleSearch = () => {
        // console.log(this.props)
        this.props.searchRequest(this.state.value);
    }
    handleOnChange = (event) => {
        this.setState({value: event.target.value})
    }
    render () {
        const {isLoading, data, error} = this.props;
        if(isLoading) return(<p>Загрузка данных</p>);
        
        if(error) return(<p>{error}</p>);
        
        return (
        <div className="search">
            <div className="search_tab">
                <input onChange={this.handleOnChange} value={this.state.value} placeholder="Название..."/><button onClick={this.handleSearch}>Найти!</button>
            </div>
            <div>
                {data.length!==0 && data.map((item,i)=><ShowPreview key={i} {...item}/>)}
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state.search),
    data: getData(state.search),
    error: getError(state.search)
}); 

export default connect(mapStateToProps, {searchRequest})(Search);