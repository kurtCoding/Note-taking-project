import { Link } from "react-router-dom";
import { useState } from "react";
export default function Note({ note, category}) {
  const [pairs, setPairs] = useState([])

// const [color, setColors] = useState("")
// console.log(color)


  //!Check this, color is being displayed but when passed in tailwind it doesn't style properly
  // useEffect(() => {
  //   const tag = pairs.find((pair) => pair.name.toLowerCase() === category.toLowerCase())
  //   setColors(tag ? tag.color : "")
  // }, [pairs, category])

  // useEffect(() =>{
  //   const tags = categories.map((category) => ({
  //     name: category.name,
  //     color: randomColor(),
  //   }));
  //   setPairs(tags.slice(1))
  // },[categories])
  
  // console.log(pairs)
  
  
  return (
    <div className="mb-3 ml-auto mr-auto w-3/4 rounded border-b px-1 py-6 text-start">
      <div className="flex items-center">
        <h2 className="ml-2 font-extrabold text-fuchsia-200">
          <Link to={`/notes/${note.id}`} className="text-lg">
          {note.title}
          </Link>
          </h2>
        <span className="ml-auto text-xs font-normal text-accent">
          {category.toUpperCase()}
        </span>
        <span
        // Add Color Below
          className={`ml-2 inline-block h-3 w-3 rounded-full bg-red-100`}
        ></span>
      </div>
      <br />
      <h3 className="text-font ml-2 text-xl">{note.body}</h3>
    </div>
  );
}
