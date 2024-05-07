import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteCategory,
  getCategories,
  addNewCategory,
  updateCategory,
} from "../services/categoriesApi";

export default function SideBar({allNotes, setNotes, categories, setCategories}) {
  const [noteBookName, setNoteBookName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentNoteBookId, setCurrentNoteBookId] = useState();
  const [isActive, setIsActive] = useState(-1);
  
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(e) {
    const title = e.target.value;
    const result = title.length ? filterNotes(title, allNotes) : allNotes;
    console.log(result)
    setSearchTitle(title);
    setNotes(result)
  }

  function filterNotes(search, notes){
    console.log(notes)
    console.log(search)
    return notes.filter((note) => {
      return note.title.toLowerCase().match(search.toLowerCase()) || note.body.toLowerCase().match(search.toLowerCase());
    });
  }

  function handleCategoryBG(idx) {
    setIsActive(idx);
  }

  function handleCategoryChange(id) {
    setCurrentNoteBookId(id);
    setIsEdit(false);
    setNoteBookName("");
  }
  function handleEditMode() {
    if (!currentNoteBookId || currentNoteBookId == "all") return;
    setIsEdit(!isEdit);
    const book = categories.find((ele) => ele.id === currentNoteBookId);

    setNoteBookName(book.name);
  }

  function handleSubmitNewNoteBook(e) {
    e.preventDefault();

    if (isEdit) {
      if (currentNoteBookId === "all") return;

      updateCategory({ id: currentNoteBookId, name: noteBookName })
        .then((response) => {
          console.log(response, "k viene");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      addNewCategory({ name: noteBookName })
        .then((response) => {
          setCategories((prev) => [...prev, response]);
          setNoteBookName("");
        })
        .catch((error) => {
          //handle error
          console.error(error)
        });
    }
  }

  function tryDeleteCategory(id) {
    deleteCategory(id)
      .then((response) => {
        //show deleted successfully msg
      })
      .catch((error) => {
        //handle error msg
      });
  }

  useEffect(() => {
    getCategories().then((data) => {
      setCategories([{ name: "All Notes", id: "all" }, ...data]);
    });
  }, []);

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="bg-nav dark:bg-nav h-full overflow-y-auto px-3 py-4 ">
        <Link to="/">
          <div className="mb-5 ms-3 text-4xl text-fuchsia-300">⚡ Eureka</div>
        </Link>

        <label htmlFor="searchTitle">
          <input
            className="mb-4 rounded-md bg-gray-600 py-1 text-white text-center w-full"
            type="text"
            value={searchTitle}
            id="searchTitle"
            placeholder={` Search Note...${"                        "}🔍`}
            onChange={handleTextChange}
          />
        </label>

        <Link to="/notes/new">
          <button
            type="button"
            className="text-center mb-10 me-2 w-full rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 "
          >
            + Add Note
          </button>
        </Link>
        <div className="flex justify-between p-2 align-baseline text-white">
          <p>Note Books</p>
        </div>

        <form className="mx-auto max-w-md" onSubmit={handleSubmitNewNoteBook}>
          <div className="relative">
            <input
              onChange={(e) => setNoteBookName(e.target.value)}
              value={noteBookName || ""}
              type="search"
              id="default-search"
              maxLength="25"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Add note book"
              required
            />

            <button className="bg-whitetext-sm absolute bottom-0 end-0 top-0 w-fit rounded-lg border border-gray-300 px-2  font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 active:bg-red-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              {isEdit ? "Update" : <i className="fa-solid fa-plus p-2"></i>}
            </button>
          </div>
        </form>

        <ul className="max-h-30 space-y-2 overflow-y-auto font-medium">
          <li>
            <ul id="dropdown-example" className=" space-y-2 py-2">
              {categories.map((ele, idx) => (
                <li key={idx} onClick={() => handleCategoryChange(ele.id)}>
                  <Link
                    to={ele.id === "all" ? "notes/" : `${ele.name.toLowerCase()}/`}
                    className={`group flex w-full cursor-pointer items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                      isActive === idx ? "bg-[#EFABFC] dark:text-black" : ""
                    }`}
                    onClick={() => handleCategoryBG(idx)}
                  >
                    {ele.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/about">
              <button
                type="button"
                className="w-124 fixed bottom-0 mb-5 me-2 ml-8 rounded-lg px-5  py-2.5 text-base font-medium  hover:bg-gray-100 focus:outline-none focus:ring-gray-100 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                About Us
              </button>
            </Link>
          </li>
        </ul>
        <ul id="dropdown-example" className=" space-y-2 py-2">
          <li
            onClick={handleEditMode}
            className="group flex w-full cursor-pointer items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <i className="fa-solid fa-pen-to-square mr-2"></i> Edit label
          </li>
          <li
            onClick={tryDeleteCategory}
            className="group flex w-full cursor-pointer items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <i className="fa-solid fa-trash-can mr-2"></i> Delete
          </li>
        </ul>
      </div>
    </aside>
  );
}
