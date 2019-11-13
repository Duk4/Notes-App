import React from 'react';
import NotesList from './NotesList'

const App = () => {
  return (
    <div className="app">
      <header>Notes App</header>
      <div className="filter">
        <input type="text" placeholder="Search note titles..." />
      </div>
      <button className="add-note">New note</button>
      <div className="sort">
        <span>Notes</span>
        <select>
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
        </select>
      </div>
      <div className="note-list">
        <NotesList />
      </div>
    </div>
  );
}

export default App;