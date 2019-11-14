import React, { useState } from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';
import jsonNotes from '../notes.json';

const App = () => {
  const [notes, setNotes] = useState(jsonNotes);
  const [filterString, setString] = useState('');
  const [isAddingNote, setAddingState] = useState(false);
  const [sort, setSort] = useState('newest');

  const handleAddNote = (note) => {
    setAddingState(false);
    setNotes([...notes, notes[notes.length] = note]);
  };

  if (sort === 'newest') {
    notes.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  } else {
    notes.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    }).reverse();
  }

  let form, className;
  if (isAddingNote) {
    form = <AddNote handleAddNote={handleAddNote} />;
    className = "blur-on";
  }

  return (
    <div className="app">
      <div className={className}>
        <header>Notes App</header>
        <div className="filter">
          <input type="text" placeholder="Search note titles..." onChange={(e) => { setString(e.target.value) }} />
        </div>
        <button className="new-note" onClick={() => { setAddingState(true) }}>New note</button>
        <div className="sort">
          <span>Notes</span>
          <select onChange={(e) => { setSort(e.target.value) }}>
            <option value="newest">newest</option>
            <option value="oldest">oldest</option>
          </select>
        </div>
        <div className="note-list">
          <NotesList notes={notes} filter={filterString} />
        </div>
      </div>
      {
        form
      }
    </div>
  );
}

export default App;