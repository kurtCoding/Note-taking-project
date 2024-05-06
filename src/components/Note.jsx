import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Note({ note, category, pairs}) {


const [color, setColors] = useState("")
console.log(color)


  //!Check this, color is being displayed but when passed in tailwind it doesn't style properly
  useEffect(() => {
    const tag = pairs.find((pair) => pair.name.toLowerCase() === category.toLowerCase())
    setColors(tag ? tag.color : "")
  }, [pairs, category])
  

  return (
    <div className="mb-3 ml-auto mr-auto w-3/4 rounded border-b px-1 py-6 text-start">
      <div className="flex items-center">
        <h2 className="text-font ml-2 font-bold">
          <Link to={`/notes/${note.id}`}>
          {note.title}
          </Link>
          </h2>
        <span className="ml-auto text-xs font-normal text-accent">
          {category.toUpperCase()}
        </span>
        <span
        // Add Color Below
          className={`ml-2 inline-block h-3 w-3 rounded-full bg-[${color}]`}
        ></span>
      </div>
      <br />
      <h3 className="text-font ml-4">{note.body}</h3>
    </div>
  );
}
