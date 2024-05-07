import { Link } from "react-router-dom";

export default function Note({ note, categories, category}) {

  //!Note Category works giving the category in a string
  // console.log(note.category)

  //?What's causing the undefined?
  //!Updated Cat is an array of objects and no undefines
  const updatedCat = categories.slice(1)
  // console.log(updatedCat)


  // !Logic for this is undefined
  const check = updatedCat.find((cat) => {
    return cat.name.toLowerCase() === note.category.toLowerCase()
  })
  // console.log(check.color)
  
  const bg = check && check.color ? `bg-[${check.color}]` : "bg-red-100";
  // console.log(bg)


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
        // Add Color Below bg-[${color}]
        className={`ml-2 inline-block h-3 w-3 rounded-full ${bg}`}
        ></span>
      </div>
      <br />
      <h3 className="text-font ml-2 text-xl">{note.body}</h3>
    </div>
  );
}
