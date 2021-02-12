const { default: chalk } = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find( (note) => note.title === title) 
    //const duplicateNotes = notes.filter( (note) => note.title === title) 

    // const duplicateNotes = notes.filter ( function(note) {
    //     return note.title === title
    // })

    debugger
    
    if (!duplicateNote) {
        notes.push ({
            title: title,
            body: body
        })

        saveNotes(notes) 
        console.log(chalk.green('new note added.'))
    } else {
        console.log(chalk.red('Note title is taken!'))
    }

   
}
const removeNote = (title) => {
    console.log(title)
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)    

    if (notes.length > noteToKeep.length) {
        console.log(chalk.green('The note was removed.'))
        saveNotes(noteToKeep) 
    } else {        
        console.log(chalk.red('The was no note to be removed.'))
    }
   
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your nodes'))

    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title )

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.inverse.red('Note not found!'))        
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

module.exports = { 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}