// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getNoteById } from "../api/fetch";

// export default function NoteDetails() {
//   const { id } = useParams();
//   const [note, setNote] = useState(null);

//   useEffect(() => {
//     getNoteById(id)
//       .then((note) => setNote(note))
//       .catch((error) => console.error(error));
//   }, [id]);

//   return (
//     <section className="over fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary">
//       <h1 className="text-font text-center">Note Details</h1>
//           <h2>Note Details</h2>
//           <p>ID: {note.id}</p>
//           <p>Title: {note.title}</p>
//           <p>Body: {note.body}</p>
//           <p>Category: {note.category}</p>
//     </section>
//   );
// }
