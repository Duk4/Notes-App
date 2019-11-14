import React from 'react';
import '../styles/note.scss';

const Note = ({ note, handleDelete, handleEdit, isChangingStatus, isAddingNote }) => {
    let id, edit, deletes;
    if (note.status === "Draft") id = 'note';

    if (isAddingNote === false && isChangingStatus === false) {
        edit = () => { handleEdit(note) };
        deletes = () => { handleDelete(note) };
    }

    return (
        <div className="note" id={id}>
            <div className="title-row">
                <h3 className="title">{note.title}</h3>
                <div className="btns">
                    <button className="edit" onClick={edit}>&equiv;</button>
                    <button className="delete" onClick={deletes}>&otimes;</button>
                </div>
            </div>
            <p className="body">{note.body}</p>
        </div>
    );
}

export default Note;