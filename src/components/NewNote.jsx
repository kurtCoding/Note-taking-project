import { useState } from "react";
import { addNewNote } from "../services/notesApi.js";

const categories = [
  {name: "Work", id: "1"}, 
  {name: "School", id: "1"}, 
  {name: "Development", id: "1"}, 
]
export default function NewNote() {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    category: "",
  });

  function handleSubmit(event) {
    event.preventDefault()
    addNewNote(newNote).then((res) => {
      
    }) 
    setNewNote({
    title: "",
    body: "",
    category: ""
  })
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
        <h1 className="text-4xl text-font text-center mt-6">New Note</h1>
        <label htmlFor="title" className="text-xl text-white">
          Title
        </label>
        <input
          onChange={handleTextChange}
          type="text"
          id="title"
          name="title"
          value={newNote.title}
          require
          className="border border-[#878585] bg-transparent text-font mb-4 text-2xl"
        />

        <label htmlFor="noteArea" className="text-xl text-white">Scribe Here..</label>
        <textarea
          onChange={handleTextChange}
          value={newNote.body}
          id="body"
          className="border border-[#878585] bg-transparent text-font mb-4 text-base"
          rows="20"
          cols="70"
        >
          Eureka!!! I shouted, as I raced to my notepad to jot down my
          thoughts...
        </textarea>
        <br />
        <label htmlFor="categories" className="text-xl text-white">NoteBank</label>
        <select name="categories" id="categories" className="border border-[#878585] bg-transparent text-font mb-4" onChange={handleTextChange} value={newNote.category}>
          {categories.map((ele) => <option value={ele.name}>{ele.name}</option> )}
        </select>
        <input type="submit" value="Add Note" className="w-20 text-center border border-[#878585] bg-transparent text-font mb-4" />
      </form>
    </section>
  );
}
