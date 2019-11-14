import React from 'react';
import Note from './Note';

const NotesList = ({ notes, filter, handleDelete, handleEdit }) => {
    if (filter) {
        let regex = new RegExp("^" + filter, "i");
        notes = notes.filter((el) => {
            return el.title.match(regex);
        });
    };

    const published = notes.filter((el) => { return el.status === "Published" });
    const drafted = notes.filter((el) => { return el.status === "Draft" });
    console.log(notes);
    let noNotes;
    if (!notes.length) {
        noNotes = <div className="no-notes">No notes...</div>;
    };

    return (
        <div className="list">
            {
                published && published.map((note, i) => {
                    return (<Note note={note} key={i} handleDelete={handleDelete} handleEdit={handleEdit} />);
                })
            }
            {
                drafted && drafted.map((note, i) => {
                    return (<Note note={note} key={i} handleDelete={handleDelete} handleEdit={handleEdit} />);
                })
            }
            {
                noNotes
            }
        </div>
    );
}

export default NotesList;