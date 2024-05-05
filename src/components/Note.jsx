export default function Note({ note }) {
  let dot;
  if (note.category === "school") {
    dot = 'bg-green-400'
  }
  if (note.category === "work") {
    dot = 'bg-purple-400'
  }
  if (note.category === "development") {
    dot = 'bg-[#FEA639]'
  }

  return(
  <div className="mb-3 ml-auto mr-auto w-3/4 rounded px-1 py-6 text-start border-b">
      <div className="flex items-center">
          <h2 className="ml-2 font-bold text-font">{note.title}</h2>
        <span className="ml-auto text-xs font-normal text-accent">{note.category.toUpperCase()}</span>
        <span className={`ml-2 inline-block rounded-full w-3 h-3 ${dot}`}></span>
      </div>
      <br />
      <h3 className="text-font ml-4">{note.body}</h3>
  </div>
  );
}
