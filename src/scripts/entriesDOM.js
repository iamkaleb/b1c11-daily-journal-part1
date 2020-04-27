// DEPENDENCIES: data.js and entryComponent.js

// VARIABLE SELECTING THE ARTICLE CONTAINER FOR JOURNAL ENTRY LOG
const entryContainer = document.querySelector("#entryLog")

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
function renderJournalEntries (entries) {
        entries.forEach(entry => {
            entryContainer.innerHTML += makeEntryComponent(entry)
        })
    }

API.getJournalEntries()
.then(entries => {
    renderJournalEntries(entries)
})