import React, { useState } from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';
import Draft from './Draft';
import jsonNotes from '../notes.json';

let data;
if (localStorage.getItem('storeddata') === null) {
  data = jsonNotes;
} else {
  data = JSON.parse(localStorage.getItem('storeddata'));
};
console.log(data);
const saveDataToLocal = (data) => {
  let storedData = JSON.stringify(data);
  localStorage.setItem('storeddata', storedData);
};

const App = () => {
  const [notes, setNotes] = useState(data);
  const [filterString, setString] = useState('');
  const [isAddingNote, setAddingState] = useState(false);
  const [isChangingStatus, setChangingStatus] = useState(false);
  const [noteChangingStatus, setNoteChangingStatus] = useState({});
  const [sort, setSort] = useState('newest');
  console.log(notes);
  const handleAddNote = (note) => {
    setAddingState(false);
    setNotes([...notes, notes[notes.length] = note]);
    saveDataToLocal(notes);
  };

  const handleDelete = (note) => {
    let newNotes = notes.filter((el) => {
      return el !== note;
    });
    setNotes([...newNotes]);
    console.log(newNotes);
    saveDataToLocal(newNotes);
    console.log(newNotes);
  };

  const handleEdit = (note) => {
    setChangingStatus(true);
    setNoteChangingStatus(note);
  };

  const handleStatus = (noteChangingStatus, note) => {
    let index = notes.indexOf(noteChangingStatus);
    let newNotes = notes;
    newNotes[index].status = note.status;
    setNotes(newNotes);
    setChangingStatus(false);
    saveDataToLocal(notes);
  }

  const sortByDate = (arr) => {
    return arr.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }

  if (sort === 'newest') {
    sortByDate(notes);
  } else {
    sortByDate(notes).reverse();
  }

  let form, className, func;
  if (isAddingNote) {
    form = <AddNote handleAddNote={handleAddNote} setAddingState={setAddingState} />;
    className = "blur-on";
  } else if (isChangingStatus) {
    form = <Draft noteChangingStatus={noteChangingStatus} handleStatus={handleStatus} setChangingStatus={setChangingStatus} />;
    className = "blur-on";
  } else {
    func = () => { setAddingState(true) };
  }

  return (
    <div className="app">
      <div className={className}>
        <header>Notes App</header>
        <div className="filter">
          <input type="text" placeholder="Search note titles..." onChange={(e) => { setString(e.target.value) }} />
        </div>
        <button className="new-note" onClick={func}>New note</button>
        <div className="sort">
          <span>Notes</span>
          <select onChange={(e) => { setSort(e.target.value) }}>
            <option value="newest">newest</option>
            <option value="oldest">oldest</option>
          </select>
        </div>
        <div className="note-list">
          <NotesList
            notes={notes}
            filter={filterString}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            isChangingStatus={isChangingStatus}
            isAddingNote={isAddingNote}
          />
        </div>
      </div>
      {form}
    </div>
  );
}

export default App;