// FUNCTION: GETS JOURNAL ENTRIES FROM LOCAL JSON
const API = {
    getJournalEntries () {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    }
}
export default API