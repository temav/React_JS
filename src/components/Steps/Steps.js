import React from 'react';
import Step from './Step';
function Steps (props) {
    const {data_headers, step, click_func} = props;
    return (data_headers.map((item, index) => <Step 
        key={index} 
        number={index+1}
        step={step} 
        onClickTab={click_func}
        isSelected={step === index+1}
        isClickable={step >= index+1}>{item}</Step>));
}

export default Steps;