const fs = require('fs');
const getNotes = function()
{
    return 'your notes...'
}
const addNotes = function (title, body)
{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>//notes is an array and note is element of an array
    {
 note.title === title;
    }) 
if(duplicateNotes.length==0)
{
 notes.push({
    title:title,
    body:body
    })
saveNotes(notes);
console.log("note is added sucessfully");
}
else{
    console.log("note is not added because title taken");
}
}
const saveNotes = function (notes)
{
    const dataJSON = JSON.stringify(notes);//convering object to json
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function()
{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
return data;
}catch(e)
{
    return [];
}
}
const removeNotes = function(titled)
{
const notes = loadNotes();
const checkTitle = notes.filter((note)=>{
 return note.title!=titled;  
}) 
if(notes.length!=checkTitle.length)
{
   saveNotes(checkTitle);
   console.log("title is removed");
}
 else
console.log("title is not found");
}
const listNotes = () =>
{
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(`title- ${note.title}`);
        console.log(`body- ${note.body}`);
    });
}
const readNotes = (searchtitle) =>
{
    const notes = loadNotes();
    notes.forEach((note)=>{
        if(note.title===searchtitle)
        {
            console.log(note.body);
      }
    } )
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes:readNotes
}