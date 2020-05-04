import COMP from "./entryComponent.js"

// VARIABLE SELECTING THE ARTICLE CONTAINER FOR JOURNAL ENTRY LOG
const entryContainer = document.querySelector("#entryLog")

// FUNCTION RENDERING EACH JOURNAL ENTRY TO THE DOM
const DOM = {
    renderJournalEntries (entries) {
        entries.forEach(entry => {
            entryContainer.innerHTML += COMP.makeEntryComponent(entry)
        })
    }
}

export default DOM