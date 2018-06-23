
const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes.js');

const titleOptions={
		describe:'Title of note',
		demand: true,// this argument required--by default false
		alias: 't'
};
const bodyOptions={

		describe:'Body of note',
		demand:true,
		alias:'b'
};
const argv=yargs
.command('add','Add a new note',{
	title: titleOptions,
	bodyOptions: bodyOptions
})
.command('list','List all notes')
.command('read','Read a note',{
	title: titleOptions
})
.command('remove','Remove a note',{
	title: titleOptions
})
.help()
.argv;
const command=argv._[0];
// console.log('Yargs :', argv);


if(command==='add'){
	let note=notes.addNote(argv.title,argv.body);
	if(note){
		notes.logNote(note);
		// console.log(`Note ${note.title} is added successfully`);
	}else{
		console.log(`Note title already exist`);
	}
	
}else if(command==='list'){
	let allnote=notes.allNote();
	console.log(`***** Note(s) ${allnote.length} *****`);
	allnote.forEach((note)=>notes.logNote(note));

}else if(command==='read'){
	let note=notes.readNote(argv.title);
	if(note){
		notes.logNote(note);
	}else{
		console.log(`Note is not found`);
	}
	
}else if(command==='remove'){
	let note=notes.removeNote(argv.title);
	if(note){
		console.log(`Note  is removed successfully`);
	}else{
		console.log(`Note is not  exist`);
	}
	
}else {
	console.log('command not recognize');
}


