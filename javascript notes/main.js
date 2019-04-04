function fetchNotes() {
  let notes = JSON.parse(localStorage.getItem("notes"));
  let notesList = document.getElementById("notesList");

  notesList.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    const id = notes[i].id;
    const desc = notes[i].description;
    const status = notes[i].status;

    notesList.innerHTML += `<div class="col-md-3"><div class="well">
        <p><span class="label label-info">${status}</span></p>
            <h3>${desc}</h3>
                <a href="#" class="btn btn-warning" onclick="setStatusCompleted('${id}')" >Completed</a>
                <a href="#" class="btn btn-danger" onclick="deleteNote('${id}')">X</a>
        </div></div>`;
  }
}

document.getElementById("noteInputForm").addEventListener("submit", saveNote);

function saveNote(e) {

  //create random id
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const noteId = randLetter + Date.now();

  const noteDesc = document.getElementById("noteDescInput").value;
  const noteStatus = "New";
  const note = {
    id: noteId,
    description: noteDesc,
    status: noteStatus
  };

  if (localStorage.getItem("notes") === null) {
    let notes = [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  document.getElementById("noteInputForm").reset();

  fetchNotes();

  e.preventDefault();
}

function deleteNote(id) {
  let notes = JSON.parse(localStorage.getItem("notes"));

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      notes.splice(i, 1);
    }
  }

  localStorage.setItem("notes", JSON.stringify(notes));

  fetchNotes();
}

function setStatusCompleted(id) {
  let notes = JSON.parse(localStorage.getItem("notes"));

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      notes[i].status = "Completed";
    }
  }

  localStorage.setItem("notes", JSON.stringify(notes));

  fetchNotes();
}

//TO DO edit a note description text