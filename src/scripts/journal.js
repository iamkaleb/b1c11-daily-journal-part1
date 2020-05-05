import API from "./data.js"
import DOM from "./entriesDOM.js"

const createJournalEntry = (date, concepts, entry, mood) => ({
    date: date,
    concepts: concepts,
    entry: entry,
    mood: mood
    })

document.getElementById("record-entry").addEventListener("click", event => {
    event.preventDefault();
    let date = document.getElementById("journalDate").value;
    let concepts = document.getElementById("concepts").value;
    let entry = document.getElementById("journal_entry").value;
    let mood = document.getElementById("mood").value;
    let newJournalEntry = createJournalEntry(date, concepts, entry, mood)
    if (date !== "" &&
        concepts !== "" &&
        entry !== "" &&
        mood !== "") {
    API.addJournalEntries(newJournalEntry)
    .then( entries => {
        return API.getJournalEntries(entries)
    })
    .then( entries => {
        DOM.renderJournalEntries(entries)
    })
        } else {
            window.alert("Please complete your journal!")
        }
    })



API.getJournalEntries()
.then(entries => {
    DOM.renderJournalEntries(entries)
})