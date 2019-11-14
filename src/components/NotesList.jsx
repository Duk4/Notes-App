import React from 'react';
import Note from './Note';

const NotesList = ({ notes, filter, handleDelete }) => {
    if (filter) {
        let regex = new RegExp("^" + filter, "i");
        notes = notes.filter((el) => {
            return el.title.match(regex);
        })
    }

    let noNotes;
    if (!notes.length) {
        noNotes = <div className="no-notes">No notes...</div>;
    }

    return (
        <div className="list">
            {
                notes && notes.map((note, i) => {
                    return (<Note note={note} key={i} handleDelete={handleDelete} />);
                })
            }
            {
                noNotes
            }
        </div>
    );
}

export default NotesList;