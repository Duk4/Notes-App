import React from 'react';
import Note from './Note';

const NotesList = () => {
    return (
        <div className="list">
            <Note />
            <Note />
            <Note />
        </div>
    );
}

export default NotesList;