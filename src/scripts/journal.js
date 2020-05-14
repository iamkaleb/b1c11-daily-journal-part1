import API from "./data.js"
import DOM from "./DOM.js"

const createJournalEntry = (date, concepts, entry, mood) => ({
    date: date,
    concepts: concepts,
    entry: entry,
    moodId: mood
    })

DOM.renderForm();

DOM.renderFilter();

DOM.renderSearchField();

API.getJournalEntries()
.then(entries => {
    DOM.renderJournalEntries(entries)
});

document.getElementById("record-entry").addEventListener("click", event => {
    event.preventDefault();
    let hiddenEntryId = document.getElementById("journalId").value;
    let date = document.getElementById("journalDate").value;
    let concepts = document.getElementById("concepts").value;
    let entry = document.getElementById("journal_entry").value;
    let mood = document.getElementById("mood").value;
    let newJournalEntry = createJournalEntry(date, concepts, entry, mood)
    let curseFilter = /fuck|shit|bitch/i
    if (curseFilter.test(entry) || curseFilter.test(concepts)) {
        window.alert("No cursing!")
    } else if (hiddenEntryId != "") {
        API.editJournalEntry(hiddenEntryId)
        .then( entries => {
            return API.getJournalEntries(entries);
        })
        .then( entries => {
            return DOM.renderJournalEntries(entries);
        })
    } else if (hiddenEntryId == "") {
        API.addJournalEntries(newJournalEntry)
        .then( entries => {
            return DOM.renderJournalEntries(entries)
        })
        DOM.renderForm();
        DOM.renderFilter();
    } else {
        window.alert("Please complete your journal!")
    }
})

const radioButton = document.getElementsByName("mood")

radioButton.forEach(button => button.addEventListener("click", event => {
    const mood = event.target.value;
    API.getJournalEntries()
    .then(entries => {
        return entries.filter(entries => entries.mood.label === mood)
    })
    .then(entries => {
        return DOM.renderJournalEntries(entries)
    })
    }));

const updateFormFields = entryId => {
        const hiddenJournalId = document.getElementById("journalId");
        const journalDate = document.getElementById("journalDate");
        const journalConcepts = document.getElementById("concepts");
        const journalEntry = document.getElementById("journal_entry");
        const journalMood = document.getElementById("mood");

        fetch(`http://localhost:8088/entries/${entryId}`)
        .then(response => response.json())
        .then(entries => {
            hiddenJournalId.value = entries.id;
            journalDate.value = entries.date;
            journalConcepts.value = entries.concepts;
            journalEntry.value = entries.entry;
            journalMood.value = entries.mood;
        })
    }


document.addEventListener("click", event => {
    if (event.target.id.startsWith("delete--")) {
        const entryId = event.target.id.split("--")[1];
        API.deleteJournalEntry(entryId)
        .then( entries => {
            return API.getJournalEntries(entries);
        })
        .then( entries => {
            return DOM.renderJournalEntries(entries);
        })
    } else if (event.target.id.startsWith("edit--")) {
        const entryId = event.target.id.split("--")[1];
        updateFormFields(entryId);
        }
    })


document.addEventListener("keypress", event => {
    if (event.keyCode === 13) {
        let filteredStuff = [];
        let searchTerm = document.getElementById("searchTerm").value;
        API.getJournalEntries ()
            .then(entries => {
                console.log(entries)
                entries.forEach(entry => {
                    for (const text of Object.values(entry)) {
                        if (text.toString().includes(searchTerm)) {
                            filteredStuff.push(entry);
                        }
                    DOM.renderJournalEntries(filteredStuff)   
                    }
                })
                })     
}})