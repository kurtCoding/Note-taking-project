import { useState } from "react";
import { addNewNote } from "../services/notesApi.js";

export default function NewNote({categories}) {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    category: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    addNewNote(newNote).then((res) => {});
    setNewNote({
      title: "",
      body: "",
      category: "",
    });
  }

  function handleTextChange(event) {
    setNewNote({
      ...newNote,
      [event.target.id]: event.target.value,
    });
  }

  // function resetForm() {
  //   setNewNote([...newNote])
  // }

  return (
    <section className="overflow-y-auto scroll-smooth bg-primary">
      <form
        className="fixed right-0 flex h-screen w-[85%] flex-col pl-24 pr-24"
        onSubmit={handleSubmit}
      >
        <h1 className="text-font mt-6 text-center text-4xl">New Note</h1>
        <label htmlFor="title" className="text-xl text-white">
          Title
        </label>
        <input
          onChange={handleTextChange}
          type="text"
          id="title"
          name="title"
          value={newNote.title}
          required
          className="text-font mb-4 border border-[#878585] bg-transparent text-2xl"
        />

        <label htmlFor="noteArea" className="text-xl text-white">
          Scribe Here..
        </label>
        <textarea
          onChange={handleTextChange}
          value={newNote.body}
          id="body"
          className="text-font mb-4 border border-[#878585] bg-transparent text-base"
          rows="20"
          cols="70"
          required
        >
          Eureka!!! I shouted, as I raced to my notepad to jot down my
          thoughts...
        </textarea>
        <br />
        <label htmlFor="categories" className="text-xl text-white">
          NoteBank
        </label>
        <select
          required
          name="category"
          id="category"
          className="text-font mb-4 border border-[#878585] bg-transparent"
          onChange={handleTextChange}
          value={newNote.category}
        >
          {categories.map((ele, idx) => (
            <option key={idx} value={ele.name}>
              {ele.name}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value="Add Note"
          className="text-font mb-4 w-20 border border-[#878585] bg-transparent text-center"
        />
      </form>
    </section>
  );
}
