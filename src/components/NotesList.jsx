import React from 'react';
import Note from './Note';

const NotesList = ({ notes, filter }) => {
    if (filter) {
        let regex = new RegExp("^" + filter, "i");
        notes = notes.filter((el) => {
            return el.title.match(regex);
        })
    }

    return (
        <div className="list">
            {
                notes && notes.map((note, i) => {
                    return (<Note note={note} key={i} />);
                })
            }
        </div>
    );
}

export default NotesList;