import API from "./data.js"
import DOM from "./entriesDOM.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

document.getElementById("record-entry").addEventListener("click", function () {
    fetch("http://localhost:8088/entries", {
    method: "POST",
    body: JSON.stringify(newJournalEntry),
    headers: {
      "Content-Type": "application/json"
    },
})
})



// API.getJournalEntries()
// .then(entries => {
//     DOM.renderJournalEntries(entries)
// })