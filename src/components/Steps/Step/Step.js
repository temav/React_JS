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
        const {isClickable, isSelected, onClickTab, number, step, children} = this.props;
        let step_classname = 'step';
        isClickable ? step_classname += ' step-clickable': step_classname;
        isSelected ? step_classname += ' step-selected': step_classname;
    
        return(<div className={step_classname} onClick={() => {
            step >= number ? onClickTab(number) : undefined}}>
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
        </div>
        );
    }
};

export default Step;