import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
        // step = this.props;
        const TITLE_PERSONAL = "Personal";
        const TITLE_CARD = "Card Info";
        const TITLE_FINISH = "Good luck!";
        let title_name;
        switch(this.props.title_) {
            case 1: {
                title_name = TITLE_PERSONAL;
                break;
            }
            case 2: {
                title_name = TITLE_CARD;
                break;
            }
            case 3: {
                title_name = TITLE_FINISH;
                break;
            }
                 
            default: {
                title_name = "Что-то не так";
                break;
            }   
        }
        return (<div className="title"><h1>{title_name}</h1></div>)
    }
}

export default Title;