const URL = "https://my-json-server.typicode.com/gerardjr42/notes-json-server/notes"


//Get all Notes
export function getAllNotes() {
  return fetch(`${URL}`).then((response) => response.json());
}
