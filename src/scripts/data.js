
// FUNCTION: GETS JOURNAL ENTRIES FROM LOCAL JSON
const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        },
    addJournalEntries (newJournalEntry) {
        return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
            })
        .then( entries => {
            return this.getJournalEntries(entries)
        })},
    deleteJournalEntry (entryId) {
        return fetch(`http://localhost:8088/entries/${entryId}`, {
            method: "DELETE"
        })
    }
}

export default API