import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ErrorMessage from "../Errors/ErrorMessage";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNoteById } from "../api/fetch";

export default function NoteDetails({notes, error}) {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const [loadingError, setLoadingError] = useState(false)
  // let navigate = useNavigate();
  useEffect(() => {
    const gotNote = notes.find((n) => n.id === id)
    console.log(gotNote)
    if(gotNote) {
      setNote(gotNote)
    } else {
      setLoadingError(false)
    }
  }, [])
  
  return (
    <div>
          <h2>Note Details</h2>
          <p>ID: {note.id}</p>
          <p>Title: {note.title}</p>
          <p>Body: {note.body}</p>
          <p>Category: {note.category}</p>

    </div>
  );
}

export default function NoteDetails() {
  <section className="fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary">
      <h1 className="text-font text-center">Note Details</h1>
  </section>
}

