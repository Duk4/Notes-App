import React, { useState } from 'react';
import CloseButton from './CloseButton';
import '../styles/draft.scss';

const Draft = ({ noteChangingStatus, handleStatus, setChangingStatus }) => {
    const [note, setNote] = useState({
        title: noteChangingStatus.title,
        body: noteChangingStatus.body,
        author_name: noteChangingStatus.author_name,
        date: noteChangingStatus.date,
        status: noteChangingStatus.status
    });

    let secondOption;
    if (noteChangingStatus.status === 'Draft') {
        secondOption = 'Published';
    } else {
        secondOption = 'Draft';
    }

    return (
        <div className="draft">
            <form>
                <h3>Note status</h3>
                <div className="new-note-field">
                    <label htmlFor="author">Status:</label>
                    <select id="status" onChange={(e) => { setNote({ ...note, status: e.target.value }) }}>
                        <option value={noteChangingStatus.status}>{noteChangingStatus.status}</option>
                        <option value={secondOption}>{secondOption}</option>
                    </select>
                </div>
                <button type="button" className="add-note-btn" onClick={() => { handleStatus(noteChangingStatus, note) }}>Save</button>
            </form>
            <CloseButton func={setChangingStatus} />
        </div>
    );
}

export default Draft;