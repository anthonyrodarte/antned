import React, { useState, useEffect } from 'react';

export function Notepad() {
  const [noteText, changeText] = useState('');
  const [notes, addNote] = useState([]);

  const notesList = notes.map((note, i) => 
    <li key={i} >{note}</li>
    );

  function handleSubmit(e) {
    addNote(notes[0] = [noteText, ...notes])
    changeText('')
  };

  return (
      <div>
        <ul>{notesList}</ul>
        <label>Write some notes</label>
        <br />
        <input value={noteText} onChange={(e) => changeText(e.target.value)}/>
        <button onClick={() => {handleSubmit()}}>Submit Note</button>
      </div>
  );
}