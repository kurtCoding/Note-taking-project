import { useState, useEffect } from "react"
import ErrorMessage from "../Errors/ErrorMessage";
import { useParams, useNavigate } from "react-router-dom";
// import { getNoteById } from "../api/fetch";

export default function NoteDetails({notes, error}) {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const [loadingError, setLoadingError] = useState(false)
  let navigate = useNavigate();

  useEffect(() => {

    const gotNote = notes.find((n) => n.id === id)

    console.log(gotNote)
    if(gotNote) {
      setNote(gotNote)
    } else {
      setLoadingError(false)
    }
  }, [])

  function handleEdit() {
    navigate(`/notes/${id}/edit`)
  }

//   function handleDelete() {
//     onDelete(id);
//     navigate("/notes");
//   }
  
  return (
    <div>
          <h2>Note Details</h2>
          <p>ID: {note.id}</p>
          <p>Title: {note.title}</p>
          <p>Body: {note.body}</p>
          <p>Category: {note.category}</p>
          <button onClick={handleEdit}>Edit</button>
          {/* <button onClick={handleDelete}>Delete</button> */}


    </div>
  );
}
