// JOURNAL ENTRY STRUCTURE
const journalEntry = {
    date: "",
    conceptsCovered: "",
    entry: "",
    mood: ""
}

// JOURNAL ENTRIES ARRAY
const journalEntries = [];

// BEGINNING OF JOURNAL ENTRIES INPUT AND PUSHED TO ARRAY MANUALLY (WITHOUT FORM)
const journalEntry1 = {
    date: "4/20",
    conceptsCovered: "Functions and Debugger",
    entry: "Lectures on both basic JavaScript functions and how to use the debugger in dev tools. Got a lot of practice creating functions. Since there were separate exercises building off one initial directory, I also practiced copying directories and creating new git repositories.",
    mood: "Productive"
}

journalEntries.push(journalEntry1);

const journalEntry2 = {
    date: "4/17",
    conceptsCovered: "Objects and Manipulting DOM",
    entry: "Lectures on the basics of JavaScript objects as well as how JavaScript can be used to modify the DOM.", 
    mood: "Tired"
}

journalEntries.push(journalEntry2);

const journalEntry3 = {
    date: "4/16",
    conceptsCovered: "Group project presentations and Intro to JavaScript",
    entry: "Presented our webpages from our first group projects. I had a great time working with my team to put together a cohesive website. We did a lot of pair programming. Everyone took turns solving problems for the groupa nd contrinuting to the overall design. We were then introduced to some basics of JavaScript, including the power it has to manipulate the DOM and modify what the viewer sees when the interact with a website.",
    mood: "Appreciative"
}

journalEntries.push(journalEntry3);

// VARIABLE SELECTING THE ARTICLE CONTAINER FOR JOURNAL ENTRY LOG
const journalEntryContainer = document.querySelector("#entryLog") 

// FUNCTION CREATING THE HTML STRUCTURE OF MY JOURNAL ENTRY
const makeJournalEntryComponent = (journalEntry) => {
    return `
    <h2>${journalEntry.conceptsCovered}</h2>
    <h3>${journalEntry.date}</h3>
    <p>${journalEntry.entry}</p>
    `
}

// FUNCTION: ITERATES OVER JOURNAL ENTRY COLLECTION AND ADDS EACH JOURNAL ENTRY TO DOM
const renderJournalEntries = (entries) => {
    for (const entries of journalEntries) {
        let journalComponent = ""
        journalComponent = makeJournalEntryComponent(entries)
        journalEntryContainer.innerHTML += journalComponent
    }    
}

// RUNNING THE FUNCTION TO ADD JOURNAL ENTRIES TO DOM
renderJournalEntries(journalEntries)