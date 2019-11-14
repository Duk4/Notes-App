import React from 'react';
import '../styles/note.scss';

const Note = ({ note, handleDelete }) => {
    return (
        <div className="note">
            <div className="title-row">
                <h3 className="title">{note.title}</h3>
                <div className="btns">
                    <button className="edit">&equiv;</button>
                    <button className="delete" onClick={() => { handleDelete(note) }}>&otimes;</button>
                </div>
            </div>
            <p className="body">{note.body}</p>
        </div>
    );
}

export default Note;