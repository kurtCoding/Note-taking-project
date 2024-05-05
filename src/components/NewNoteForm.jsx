import { useState } from 'react'
import { addNewNote } from "../services/notesApi.js"

export default function NewNoteForm() {

  const [newNote, setNewNote] = useState({});

  function handleSubmit(event) {
    event.preventDefault()
    addNewNote(newNote).then((res) => {
      
    }) 
  }

  function handleTextChange(event) {
    setNewNote({
      ...newNote,
      [event.target.id]: event.target.value,
    })
  }

  return (
    <div>
      <h1>New Note</h1>
      <br/>
      <form className="newNoteForm" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name='title' />
        <br />
        <label htmlFor="noteArea">Scribe Here..</label>
        <br />
        <textarea onSubmit={handleTextChange} value={} id='noteArea' className='noteArea' rows="20" cols="70">Eureka!!! I shouted, as I raced to my notepad to jot down my thoughts...</textarea>
        <br />
        <label htmlFor="categories">NoteBank</label>
        <select name="categories" id="categories">Remember Me?
        <option value="workNotes">Work Notes</option>
        <option value="people?">People?</option>
        <option value="random">Random</option>
        <option value="allNotes">All Notes</option>
        </select>
        <input type="submit" value="Add Note" className="submitButton" />
      </form>
    </div>
  )
}
