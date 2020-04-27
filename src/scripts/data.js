// DEPENDENCIES: none

// FUNCTION: ITERATES OVER JOURNAL ENTRY COLLECTION AND ADDS EACH JOURNAL ENTRY TO DOM
const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    }
}
