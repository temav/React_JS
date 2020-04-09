import React from 'react';
import './ShowPreview.css';

const ShowPreview = (props) => {
    const {image, name, summary} = props;
    return (
    <div className="show_preview">
        <h3>{name}</h3>
        {image ? <img src={image.medium}/> : undefined}
        <div dangerouslySetInnerHTML={{__html: summary}} />
    </div>)
}

export default ShowPreview; 