import React, { Component } from 'react';

class Title extends Component {
    render() {
        const TITLE_PERSONAL = "Personal";
        const TITLE_CARD = "Card Info";
        const TITLE_FINISH = "Good luck!";
        switch(this.props.step) {
            case 1:
                return (<h1>{TITLE_PERSONAL}</h1>);
            case 2:
                return (<h1>{TITLE_CARD}</h1>);
            case 3:
                return (<h1>{TITLE_FINISH}</h1>); 
            default:
                return (<h1>{"Что-то не так"}</h1>);      
        }
    }
}

export default Title;