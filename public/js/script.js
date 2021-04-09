function getNotes() {
  fetch("http://localhost:3000/notes")
    .then((res) => res.json())
    .then((data) => {
      let notes = "";
      data.map((item) => {
        notes += `<li style="box-shadow:0 0 3px 3px rgb(112, 114, 112)" class="list-group-item mb-3"><h5>${item.title}<i onclick="deleteNote(${item.id})" style="float:right;cursor:pointer" class="fa fa-trash text-danger" aria-hidden="true"></i></h5>
                                        <p>${item.text}<i onclick="getNoteById(${item.id})" style="float:right;cursor:pointer" data-bs-toggle="modal" data-bs-target="#editModal" class="far fa-edit fa-lg mt-1 text-primary"></i></p>
                                        </li>`;
        document.getElementById("notesList").innerHTML = notes;
      });
    });
}

function addNote() {
  var title = document.getElementById("title").value;
  var text = document.getElementById("text").value;
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      text: text,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function deleteNote(id) {
  fetch(`http://localhost:3000/notes/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
var notesId = "";
function getNoteById(id) {
  notesId = id;
  fetch(`http://localhost:3000/notes/${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("editTitle").value = data.title;
      document.getElementById("editText").value = data.text;
    });
}
function editNote() {
  fetch(`http://localhost:3000/notes/${notesId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.getElementById("editTitle").value,
      text: document.getElementById("editText").value,
    }),
  });
}

module.exports = { getNotes, addNote, deleteNote, editNote };
