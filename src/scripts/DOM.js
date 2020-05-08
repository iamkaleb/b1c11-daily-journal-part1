import COMP from "./components.js"

// VARIABLE SELECTING THE ARTICLE CONTAINER FOR JOURNAL ENTRY LOG
const entryContainer = document.querySelector("#entry-section")
const formContainer = document.querySelector("#form-section")
const filterContainer = document.querySelector("#filter-section")
// FUNCTION RENDERING EACH JOURNAL ENTRY TO THE DOM
const DOM = {
    renderJournalEntries (entries) {
        entryContainer.innerHTML = ""
        entries.forEach(entry => {
            entryContainer.innerHTML += COMP.makeEntryComponent(entry)
        })
    },
    renderForm () {
        formContainer.innerHTML = COMP.makeFormComponent()
    },
    renderFilter () {
        filterContainer.innerHTML = COMP.makeFilterComponent()
    }
}

export default DOM