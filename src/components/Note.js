import React from "react";

function Note({title, content, onDelete, id}) {


function handleClick() {
onDelete(id)
}

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELT</button>
    </div>
  );
}

export default Note;
