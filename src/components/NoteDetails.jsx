import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import ErrorMessage from "../Errors/ErrorMessage";
import { deleteNote } from "../services/notesApi";

export default function NoteDetails({notes}) {
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
  }, [id, notes])

  console.log(note)

  function handleEdit() {
    navigate(`/notes/${id}/edit`)
  }

  function handleDelete(id) {
    deleteNote(id);
    // navigate("/notes")
  }
  
  return (
    <section className="over fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary text-center">
      {loadingError ? (
        <ErrorMessage />
      ): (
        <>
            <h1 className="text-center text-5xl text-font mt-10 mb-10">{note.title}
            <span className="text-accent text-base fixed right-0 mr-14">{note.category}</span>
            </h1> 
            <h2 className="text-font text-2xl">{note.body}</h2>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py px-1 rounded inline-flex items-center" onClick={handleEdit}>Edit</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py px-1 rounded inline-flex items-center" onClick={handleDelete}>Delete</button>
        </>
      )}
    </section>
  )
}
