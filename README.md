# Javascript Note Assessment

## Objective

Assessment on creaing web application using HTML, CSS, Bootstrap and Javascript.

## Prerequisites

1. Fork this boilerplate repository
2. Clone the boilerplate repository and cd into it
3. Install dependencies. The idea here is to use json-server to serve static pages and data for movies.

```
  npm install
  npm run start or json-server db.json -s ./public
```

## Coding Guidelines

1. All your HTML code resides in public/index.html
2. All your JavaScript code resides in the public/js folder
3. All your CSS code resides in the public/css folder
4. All your images resides in the public/images folder
5. HTML, Javascript, CSS code should be well indented and commented
6. You shall use Bootstrap to style your pages and elements
7. The Assessment should be pushed to gitlab on completion and submitted for Preliminary Automated Review as described below.

## Assessment

1. Populate data for **_Notes_** collection in db.json.
2. Create a Section/List **_Notes_** in your HTML page.
3. **_Notes_** section of the page should populate all the notes from the db.json using AJAX calls.
4. You should be able to add, delete, edit and get all notes
5. For adding a new note and for editing you can use Bootstrap Dialog boxes for the add new note form and edit note form.
6. The forms can have an input text field for adding/editing `title` of the note and a text area for `text` of the note.
7. Page should not refresh when adding, deleting or editing a note

## Instructions

1.  Each note item in db.json to have atleast `id`, `title`, `text`
2.  It is mandatory to use Fetch API and Promises for all the HTTP calls
3.  `public/js/script.js` is expected to have four functions -  
    a. `getNotes()` - to fetch notes from `http://localhost:3000/notes`, populate them in DOM under `<div id="notes">`.

    b. `addNote()` - to add a new note and post the note to db.json via `http://localhost:3000/notes`
    
    c. `deleteNote()` - to delete a note from the UI as well as from db.json via `http://localhost:3000/notes`. This function accepts an id.
    
    d. `editNote()` - to edit a note from the UI as well as from db.json via `http://localhost:3000/notes`. This function accepts the data as parameter that is edited.
    
4.  `public/index.html` - Notes list to be populated under `<div id="notes">`, `getNotes()` to be invoked as shown in the file
5.  You shall fix any eslint errors if present in code. To run eslint check locally, you shall execute `npm run eslint`
6.  Once you have fixed all test cases and eslint errors locally, you shall submit your solution for the manual review.
7.  Assessment submitted after time limit will not be accepted.

## MENTORS TO BEGIN REVIEW YOUR WORK ONLY AFTER ->

- You add the respective Mentor as a Reporter/Master into your Assessment Repository

- Intimate your Mentor on Slack and/or Send an Email to learner.support@stackroute.in - with your Git URL - Once you are done working and are ready for final submission.
