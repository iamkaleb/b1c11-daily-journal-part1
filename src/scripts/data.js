
// FUNCTION: GETS JOURNAL ENTRIES FROM LOCAL JSON
const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries?_expand=mood")
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
        return fetch(`http://localhost:8088/entries/${entryId}?_expand=mood`, {
            method: "DELETE"
        })
    },
    editJournalEntry (entryId) {
        const updatedObject = {
            date: document.getElementById("journalDate").value,
            concepts: document.getElementById("concepts").value,
            entry: document.getElementById("journal_entry").value,
            moodId: document.getElementById("mood").value
        }
        return fetch(`http://localhost:8088/entries/${entryId}?_expand=mood`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then(entry => entry.json())
        .then(() => {
            document.getElementById("journalId").value = "";
            document.getElementById("journalDate").value = "";
            document.getElementById("concepts").value = "";
            document.getElementById("journal_entry").value = "";
            document.getElementById("mood").value = "";
        })
    }
}

export default API