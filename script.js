document.addEventListener("DOMContentLoaded", () => {
    const noteArea = document.getElementById("noteArea");
    const saveButton = document.getElementById("saveButton");

    // Load saved note from localStorage if it exists
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
        noteArea.value = savedNote;
    }

    // Save note to localStorage on button click
    saveButton.addEventListener("click", () => {
        const noteContent = noteArea.value;
        localStorage.setItem("note", noteContent);
        alert("Note saved!");
    });
});
