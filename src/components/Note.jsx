export default function Note({ note }) {
  return (
    <div className="mb-3 ml-auto mr-auto w-3/4 rounded bg-secondary px-4 py-4 text-start">
      <div className="">
        <h2 className="flex font-bold">
          {note.title}
          <span className="ml-auto text-xs font-normal text-accent">
            {note.category}
          </span>
        </h2>
      </div>
      <h3>{note.body}</h3>
    </div>
  );
}
