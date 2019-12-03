import React from 'react';
import Note from './Note';

const NotesList = ({ notes, filter, handleDelete, handleEdit, isChangingStatus, isAddingNote }) => {
    if (filter) {
        let regex = new RegExp("^" + filter, "i");
        notes = notes.filter((el) => {
            return el.title.match(regex);
        });
    };

    const filterStatus = (string) => {
        return notes.filter((el) => { return el.status === string });
    }

    const published = filterStatus("Published");
    const draft = filterStatus("Draft");
    let sorted = published;
    for (let i = 0; i < draft.length; i++) {
        sorted.push(draft[i]);
    }

    return (
        <div className="list">
            {
                sorted.length === 0
                    ? <div className="no-notes">No notes...</div>
                    : sorted.map((note, i) =>
                        <Note
                            note={note}
                            key={i}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            isChangingStatus={isChangingStatus}
                            isAddingNote={isAddingNote}
                        />
                    )
            }
        </div>
    );
}

export default NotesList;