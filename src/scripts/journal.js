const journalEntry = {
    date: "",
    conceptsCovered: "",
    journalEntry: "",
    mood: ""
}

const journalEntry1 = {
    date: "4/20",
    conceptsCovered: "Functions and Debugger",
    journalEntry: "Lectures on both basic JavaScript functions and how to use the debugger in dev tools. Got a lot of practice creating functions. Since there were separate exercises building off one initial directory, I also practiced copying directories and creating new git repositories.",
    mood: "Productive"
}

const journalEntries = [];

journalEntries.push(journalEntry1);

const journalEntry2 = {
    date: "4/17",
    conceptsCovered: "Objects and Manipulting DOM",
    journalEntry: "Lectures on the basics of JavaScript objects as well as how JavaScript can be used to modify the DOM.", 
    mood: "Tired"
}

journalEntries.push(journalEntry2);

const journalEntry3 = {
    date: "4/16",
    conceptsCovered: "Group project presentations and Intro to JavaScript",
    journalEntry: "Presented our webpages from our first group projects. I had a great time working with my team to put together a cohesive website. We did a lot of pair programming. Everyone took turns solving problems for the groupa nd contrinuting to the overall design. We were then introduced to some basics of JavaScript, including the power it has to manipulate the DOM and modify what the viewer sees when the interact with a website.",
    mood: "Appreciative"
}

journalEntries.push(journalEntry3);

console.log(journalEntries);