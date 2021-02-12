//const fs = require('fs')
//const validator = require('validator')
const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');


const error = chalk.red;
const warning = chalk.keyword('orange');


// Custom yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }      
    },
    handler(argv) {
        console.log('Removing a note')
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)     
    }
})

yargs.parse()


//console.log(yargs.argv)

//fs.writeFileSync('notes.txt','This is the first file')
//fs.appendFileSync('notes.txt', 'This was appended later')

// const sum = notes.add(1, 4)
// console.log(sum)

// const str = notes.getNotes()
// console.log(str)

// console.log(warning('This is warning'));
// console.log(error('Exception: input error!'));
// console.log(chalk.green('Success!'));

//console.log(validator.isEmail('lioro@netapp.com'))
//console.log(validator.isURL('http://one.co.il'))