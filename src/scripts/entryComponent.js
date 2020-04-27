// DEPENDENCIES: none

// FUNCTION CREATING THE HTML STRUCTURE OF MY JOURNAL ENTRY
function makeEntryComponent (entries) {
    return `
    <h2>${entries.conceptsCovered}</h2>
    <h3>${entries.date}</h3>
    <p>${entries.entry}</p>
    `
  }
