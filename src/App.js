import React,{ useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(note) {
   setNotes(prevNote => {
    return [...prevNote,note]
   })
  }

  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((item, index) => {
        return <Note key={index} id={index}
        title={item.title} content={item.content} onDelete={deleteNote}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
