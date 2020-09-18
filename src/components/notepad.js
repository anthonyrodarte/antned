import React, { useState } from 'react';

import Notes from './Notes';

const Notepad = () => {
  const [noteText, changeText] = useState('');
  const [notes, addNote] = useState([]);

  const handleSubmit = () => {
    if (noteText) {
      addNote(notes[0] = [noteText, ...notes])
      changeText('')
    } else {
      alert('Write a note first dummy')
    }
  };

  const handleChange = ({ target: { value } }) => changeText(value);
  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') handleSubmit()
  }

  return (
    <div>
      <label>Write some notes</label>
      <br />
      <input value={noteText} onChange={handleChange} onKeyPress={handleKeyPress} />
      <button onClick={handleSubmit}>Submit Note</button>
      <Notes notes={notes} />
    </div>
  );
}

export default Notepad;
