import React, { Component } from 'react';
import './Step.css';

class Step extends Component {

    handleClick = () => {
        if (this.props.isClickable){
            if(this.props.number !== 1)
                this.props.onClick(this.props.number);
            this.props.onClick();
        }
    };
    render() {
        const prop = this.props;
        let a = '';
        if(prop.isClickable)
            a += ' step-clickable';
        if(prop.isSelected)
            a += ' step-selected';
    
        return(<div className={"step"+a} onClick={this.props.onClick}>
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
        </div>
        );
    }
};

export default Step;