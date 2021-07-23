import React from 'react';
import LoadingImage from '../image/loading.gif';

function Loading() {
    return (
        <div className="loading">
            <div className="loading_img_wrapper">
                <img className="loading_img" src={LoadingImage} alt="loading image"></img>
            </div>
        </div>
    );
}

export default Loading;