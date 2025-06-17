const {addNote , listNotes , deleteNote, deleteNotes} = require('./utils/note.js');

const command = process.argv[2];
const input = process.argv[3];

switch(command){
    case 'add':
        if(!input) return console.log("provide a note to add");
        addNote(input);
        break;
    case 'list':
        listNotes();
        break;
    case 'delete':
        if(!input || isNaN(input)) return console.log("invalid input!");
        deleteNotes(parseInt(input));
        break;
    default:
        console.log("❓ Commands:\n add \"note\" \n list \n delete <index>");
}