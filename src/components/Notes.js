import React from 'react';

const Notes = (props) => (
  <ul>
    {props.notes.map((note, idx) => (
      <li key={idx}>{note}</li>
    ))}
  </ul>
)

export default Notes;
