import { useState } from 'react'
import { addNewNote } from "../services/notesApi.js"

const categories = [
  {name: "Work", id: "1"}, 
  {name: "School", id: "1"}, 
  {name: "Development", id: "1"}, 
]
export default function NewNote() {

  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    category: ""
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
    })
  }

  // function resetForm() {
  //   setNewNote([...newNote])
  // }

  return (
    <section className="over fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary">
      <h1 className="text-font text-center">New Note Form</h1>
  
    <div>
      <h1>New Note</h1>
      <br/>
      <form className="fixed right-0 flex h-screen w-[85%] flex-col pl-12 pr-12" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input onChange={handleTextChange} type="text" id="title" name='title' value={newNote.title} require />
        <br />
        <label htmlFor="noteArea">Scribe Here..</label>
        <br />
        <textarea required onChange={handleTextChange} value={newNote.body} id='body' className='noteArea' rows="20" cols="70">Eureka!!! I shouted, as I raced to my notepad to jot down my thoughts...</textarea>
        <br />
        <label htmlFor="categories">NoteBank</label>
        <select onChange={handleTextChange} name="categories" id="category" value={newNote.category}>
          <option value="" disabled >Select</option>
        {categories.map((ele) => <option value={ele.name}>{ele.name}</option> )}
        </select>
        <input type="submit" value="Add Note" className="w-20 text-center border border-[#878585] bg-transparent text-font mb-4" />
      </form>
    </div>
    </section>
  )
}
