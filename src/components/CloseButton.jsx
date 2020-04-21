import React from 'react';
import '../styles/close_button.scss';

const CloseButton = ({ func }) => {
    return (
        <button type="button" className="close-button" onClick={() => { func(false) }}>x</button>
    );
};

export default CloseButton;