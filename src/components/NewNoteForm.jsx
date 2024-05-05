import {} from 'react'

export default function NewNoteForm() {

  return (
    <div>
      <h1>New Note</h1>
      <br/>
      <form className="newNoteForm">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name='title' />
        <br />
        <label htmlFor="noteArea">Scribe Here..</label>
        <br />
        <textarea id='noteArea' className='noteArea' rows="20" cols="70">Eureka!!! I shouted, as I raced to my notepad to jot down my thoughts...</textarea>
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
