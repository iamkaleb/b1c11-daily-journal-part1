import API from "./data.js"
import DOM from "./entriesDOM.js"

const createJournalEntry = (date, concepts, entry, mood) => ({
    date: date,
    concepts: concepts,
    entry: entry,
    mood: mood
    })

API.getJournalEntries()
.then(entries => {
    DOM.renderJournalEntries(entries)
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
        return DOM.renderJournalEntries(entries)
    })
        } else {
            window.alert("Please complete your journal!")
        }
    })

const radioButton = document.getElementsByName("mood")

radioButton.forEach(button => button.addEventListener("click", event => {
    const mood = event.target.value;
    API.getJournalEntries()
    .then(entries => {
        return entries.filter(entries => entries.mood === mood)
    })
    .then(entries => {
        return DOM.renderJournalEntries(entries)
    })
    }));

document.addEventListener("click", event => {
    if (event.target.id.startsWith("delete--")) {
        const entryId = event.target.id.split("--")[1]
        API.deleteJournalEntry(entryId)
        .then( entries => {
            return API.getJournalEntries(entries)
        })
        .then( entries => {
            return DOM.renderJournalEntries(entries)
        })
    }
})