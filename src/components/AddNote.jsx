import React, { useState } from 'react';
import '../styles/add_note.scss';

const AddNote = ({ handleAddNote }) => {
    const [note, setNote] = useState({
        title: '',
        body: '',
        author_name: '',
        date: new Date(),
        status: 'Drafted'
    });

    return (
        <div className="add-note">
            <form>
                <h3>New note</h3>
                <div className="new-note-field">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" required onChange={(e) => { setNote({ ...note, title: e.target.value }) }} />
                </div>
                <div className="new-note-field">
                    <label htmlFor="textarea">Body:</label>
                    <textarea id="body" required onChange={(e) => { setNote({ ...note, body: e.target.value }) }} />
                </div>
                <div className="new-note-field">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" required onChange={(e) => { setNote({ ...note, author_name: e.target.value }) }} />
                </div>
                <div className="new-note-field">
                    <label htmlFor="author">Status:</label>
                    <select id="status" onChange={(e) => { setNote({ ...note, status: e.target.value }) }}>
                        <option value="Drafted">Drafted</option>
                        <option value="Published">Published</option>
                    </select>
                </div>
                <button type="button" className="add-note-btn" onClick={() => { handleAddNote(note) }}>Add note</button>
            </form>
        </div>
    );
}

export default AddNote;