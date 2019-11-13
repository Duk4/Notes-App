import React from 'react';
import NotesList from './NotesList'

const App = () => {
  return (
    <div className="App">
      <header>Notes App</header>
      <section className="filter">
        <input type="text" placeholder="Search note titles..." />
      </section>
      <section className="sort">
        <span>Notes</span>
        <select>
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
        </select>
      </section>
      <section className="note-list">
        <NotesList />
      </section>
    </div>
  );
}

export default App;