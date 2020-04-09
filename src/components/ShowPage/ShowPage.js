import React, { Component } from 'react';
import { showRequest } from '../../actions/show';
import { connect } from 'react-redux';
import { getIsLoading, getData, getError } from '../../reducers/shows';
import './ShowPage.css';
import ShowPreview from '../ShowPreview';

class ShowPage extends Component {
     constructor (props) {
        // console.log('constructor');
        super(props);
        const { showRequest, isLoading } = this.props;
        const {id} = this.props.match.params;
        // console.log('constructor before isload', isLoading);
        showRequest(id);
        // console.log('constructor after isload', isLoading);
    }
    render () {

        const {isLoading, data, error} = this.props;
        const {image, summary, name} = data;
        // const {id} = this.props.match.params;
        if (isLoading) return(<p>Загрузка данных</p>);
        if (error) return(<p>{error} 404</p>);
        const {cast} = data._embedded;
        // if (data.length === 0) return null; 
        // console.log('render isload ', isLoading);
        
        // this.props.showRequest(id); 
        // {console.log(data)}
        return (
        <div className="show"> 
        <h1>{name}</h1>
        {image ? <img src={image.medium}/> : undefined}
        <h2>Plot</h2>
        <div dangerouslySetInnerHTML={{__html: summary}}/>
        <h2>Actors</h2>
        {cast.length!==0 && cast.map((item,i) => <ShowPreview key={i} {...item.person}/>)}
        </div>);
        
    }
}

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state),
    data: getData(state),
    error: getError(state)
}); 

export default connect(mapStateToProps, {showRequest})(ShowPage);