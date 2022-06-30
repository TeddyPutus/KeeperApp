import React, {useState} from "react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import InputArea from './InputArea';
import Note from './Note';

function App() {
  //a list to store our notes
  const [noteList, updateNoteList] = useState([]);

  //add to list - passed to the input area
  function AddNote(newNote){
    updateNoteList(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    updateNoteList(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <InputArea onAdd={AddNote} />

      {noteList.map((note, index) => (
            <Note
              key={index}
              id={index}
              title = {note.title}
              content = {note.content}
              onChecked={deleteNote}
            />
          ))}
      <Footer />
    </div>
  );
}

export default App;
