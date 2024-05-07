import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote, getNoteById } from "../services/notesApi";

export default function EditNote ({categories}) {
  let navigate = useNavigate();
  const { id } = useParams();

  const [showNote, setShowNote] = useState({
    title: "",
    body: "",
    category: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    updateNote(showNote).then((res) => {})
    navigate(`/notes/${id}`)
  }

  function handleTextChange(event) {
    setShowNote({
      ...showNote,
      [event.target.id]: event.target.value,
    });
  }

  useEffect(() => {
    getNoteById(id)
      .then((response) => {
        setShowNote(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);


    return (
      <section className="overflow-y-auto scroll-smooth bg-primary ">
        <form
          className="fixed right-0 flex h-screen w-[85%] flex-col pl-24 pr-24"
          onSubmit={handleSubmit}
        >
          <h1 className="text-font mt-6 text-center text-4xl">Edit Note</h1>
          <label htmlFor="title" className="text-xl text-white">
            {/* Title */}
          </label>
          <input
            onChange={handleTextChange}
            type="text"
            id="title"
            name="title"
            value={showNote.title}
            required
            className="text-font mb-4 border border-[#878585] bg-transparent text-2xl"
            // className="text-font mb-4 bg-transparent text-2xl dark:border-none outline-none focus:border-none"
          />
  
          <label htmlFor="noteArea" className="text-xl text-white">
            {/* Scribe Here.. */}
          </label>
          <textarea
            onChange={handleTextChange}
            value={showNote.body}
            id="body"
            className="text-font mb-4 border border-[#878585] bg-transparent text-base"
            // className="text-font mb-4 bg-transparent text-2xl dark:border-none outline-none focus:border-none"
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
            value={showNote.category}
          >
            {categories.map((ele, idx) => (
              <option key={idx} value={ele.name}>
                {ele.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Update"
            className="text-font mb-4 w-20 border border-[#878585] bg-transparent text-center"
          />
        </form>
      </section>
    );
}