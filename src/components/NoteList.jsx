import Note from "./Note";

export default function NoteList({notes, categories}) {
  return (
    <section className="fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary">
        <h1 className="mb-2 text-center text-4xl text-font mt-6">All Notes</h1>
        {notes.map((note) => {
          return <Note note={note} key={note.id} categories={categories} category={note.category}/>;
        })}
    </section>
  );
}
