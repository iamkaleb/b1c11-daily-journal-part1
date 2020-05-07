// FUNCTION CREATING THE HTML STRUCTURE OF MY JOURNAL ENTRY
const COMP = {
  makeEntryComponent (entries) {
    return `
    <h2>${entries.concepts}</h2>
    <h3>${entries.date}</h3>
    <p>${entries.entry}</p>
    <button id="delete--${entries.id}">Delete</button>
    `
  }
}

  export default COMP