const fs = require('fs');
const path = require('path');
// const { text } = require('stream/consumers');
console.log(__dirname);
const filePath = path.join(__dirname, '../data/notes.json');

function loadNotes(){
    if(!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath,'utf8');
    return JSON.parse(data);
}

function saveNotes(notes){
    fs.writeFileSync(filePath,JSON.stringify(notes,null,2));
}

function addNote(note){
    const notes = loadNotes();
    notes.push({id:Date.now() , text : note});
    saveNotes(notes);
    console.log("node added!");
}

function listNotes(){
    const notes = loadNotes();
    if(notes.length == 0 ) return console.log("no notes yet!");
    notes.forEach((n,i)=>{
        console.log(`${i+1}.${n.text}`);
    });
}

function deleteNotes(index){
    const notes = loadNotes();
    if(index<1 || index>notes.length) return console.log("invalid index!!");
    notes.splice(index-1,1);
    saveNotes(notes);
    console.log("deleted!");

}
module.exports = {addNote,listNotes,deleteNotes};