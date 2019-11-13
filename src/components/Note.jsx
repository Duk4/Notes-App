import React from 'react';
import '../styles/note.scss';

const Note = () => {
    return (
        <div className="note">
            <div className="title-row">
                <h3 className="title">Buy milk</h3>
                <div className="btns">
                    <button className="edit">&equiv;</button>
                    <button className="delete">&otimes;</button>
                </div>
            </div>
            <p className="body">Buy milk at the store</p>
        </div>
    );
}

export default Note;