import React from 'react';
import './ShowPreview.css';

const ShowPreview = (props) => {
    const {image, name, id, summary} = props;
    return (
    <div className="show_preview">
        <h3>{name}, {id}</h3>
        {image ? <img src={image.medium}/> : undefined}
        <div dangerouslySetInnerHTML={{__html: summary}} />
    </div>)
}

export default ShowPreview; 