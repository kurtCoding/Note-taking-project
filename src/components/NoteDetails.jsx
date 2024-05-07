import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../Errors/ErrorMessage";
import { deleteNote } from "../services/notesApi";
import { deleteNote} from "../services/notesApi";

export default function NoteDetails({ notes }) {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const [loadingError, setLoadingError] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const gotNote = notes.find((n) => n.id === id);
    console.log(gotNote);
    if (gotNote) {
      setNote(gotNote);
    } else {
      setLoadingError(false);
    }
  }, [id, notes]);

  console.log(note);

  function handleEdit() {
    navigate(`/notes/${id}/edit`);
  }

  function handleDelete() {
    deleteNote(id);
    const updatedNotes = notes.filter((n) => n.id !== id);
    setNote(updatedNotes);
    navigate("/notes")
  }

  return (
    <section className="over fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary text-center">
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className="mb-10 mt-10 text-center text-5xl text-fuchsia-200">
            {note.title}
            <span className="fixed right-0 mr-28 text-base text-accent">
            <select name="x" id="x" className="bg-accent text-font cursor-pointer custom-dropdown mr-20 rounded-full">
            <option value="x" hidden className="text-center">&nbsp;&nbsp; &hellip;</option>
            <option
              className="cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </option>
            <option
              className="cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </option>
          </select>
              {note.category}
            </span>
          </h1>
          <h2 className="text-xl text-font mx-16">{note.body}</h2>
        </>
      )}
    </section>
  );
}
