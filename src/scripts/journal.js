// VARIABLE SELECTING THE ARTICLE CONTAINER FOR JOURNAL ENTRY LOG
const entryContainer = document.querySelector("#entryLog") 

// FUNCTION CREATING THE HTML STRUCTURE OF MY JOURNAL ENTRY
const makeEntryComponent = (entries) => {
    return `
    <h2>${entries.conceptsCovered}</h2>
    <h3>${entries.date}</h3>
    <p>${entries.entry}</p>
    `
}

// JOURNAL ENTRIES ARRAY


// FUNCTION: ITERATES OVER JOURNAL ENTRY COLLECTION AND ADDS EACH JOURNAL ENTRY TO DOM
fetch("http://localhost:8088/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
            // let entryComponent = ""
            console.log("is anything happening")
            entryComponent = makeEntryComponent(entry)
            entryContainer.innerHTML += entryComponent
    }
    )
}
)


// const renderJournalEntries = (entries) => {
//     for (const entries of journalEntries) {
//         let journalComponent = ""
//         journalComponent = makeJournalEntryComponent(entries)
//         journalEntryContainer.innerHTML += journalComponent
//     }    
// }

// RUNNING THE FUNCTION TO ADD JOURNAL ENTRIES TO DOM
// renderJournalEntries(journalEntries)