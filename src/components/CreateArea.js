import React,{ useState } from "react";

function CreateArea({onAdd}) {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

function handleChange(e) {
    const {name, value} = e.target;

    setNote(preValue => {
        return {
            ...preValue,
            [name] : value
        }
    })
}

function handleSubmit(e) {
  onAdd(note)
  setNote({
    title: '',
    content: ''
  })
  e.preventDefault();
}

  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;