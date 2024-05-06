import Note from "./Note";
import randomColor from "randomcolor";
import { useEffect, useState } from "react";

export default function NoteList({notes, categories}) {
  const [pairs, setPairs] = useState([])

  // useEffect(() =>{
  //   const tags = categories.map((category) => ({
  //     name: category.name,
  //     color: randomColor(),
  //   }));
  //   setPairs(tags.slice(1))
  // },[categories])
  
  // console.log(pairs)



  return (
    <section className="fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary">
        <h1 className="mb-2 text-center text-4xl text-font mt-6">All Notes</h1>
        {notes.map((note) => {
          return <Note note={note} key={note.id} category={note.category} pairs={pairs}/>;
        })}
    </section>
  );
}
