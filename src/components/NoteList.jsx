import { useEffect, useState } from "react";
import ErrorMessage from "../Errors/ErrorMessage";
import { getAllNotes } from "../api/fetch";
import Note from "./Note";

export default function NoteList() {
  const [allNotes, setAllNotes] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    getAllNotes()
      .then((response) => {
        setAllNotes(...allNotes, response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }, []);

  return (
    <>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary">
          <h1 className="mb-2 text-center text-4xl text-font mt-6">All Notes</h1>
          {allNotes.map((note) => {
            return <Note note={note} key={note.id} />;
          })}
        </section>
      )}
    </>
  );
}
