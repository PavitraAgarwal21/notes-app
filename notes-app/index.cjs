const yargs = require('yargs');
const notes = require('./notes.js');
yargs.command({//add command
    command: 'add', 
    describe: 'add a new node',
    handler: function () {
        notes.addNotes(yargs.argv.title,yargs.argv.body)
    }
});
 yargs.command({//remove command
     command:'remove',
     describe : 'reove the notes',
     builder:{
         title:{
             describe: 'Note title',
             demandingOption: true,
             type:'string'
         }
     },
     handler: function ()
     {
         notes.removeNotes(yargs.argv.title)// console.log("remove the notes");
     }});
 yargs.command({
        command:'list',
         describe:'listing the notes',
         handler: function ()
         {
           notes.listNotes("pavitra");
         }
     })
     yargs.command({
        command:'read',
        describe : 'reading the notes',
        handler: function ()
        {
           notes.readNotes(yargs.argv.title)
        },
        builder: {
            title:{
    describe:'notes title',
    demandOption:true, 
    type:'string'
            }
        }
    })
console.log(yargs.argv);



