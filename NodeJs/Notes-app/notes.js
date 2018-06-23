
const fs=require('fs');

var fetchNotes=()=>{
	try{

		let notesString=fs.readFileSync("notes.json");
		return JSON.parse(notesString);
	}
	catch(e){
		return [];
	}
}

var saveNotes=(notes)=>{
	fs.writeFileSync("notes.json",JSON.stringify(notes));	
}

var logNote=(note)=>{
	debugger;
	console.log(`Note  is found !!!...`);
		console.log(`Title : ${note.title}`);
		console.log(`Body : ${note.body}`);
}
const addNote=(title,body)=>{

	let notes=fetchNotes();
	let note={
		title,
		body
	};
	let duplicateNotes=notes.filter((note)=>note.title===title);
	if(duplicateNotes.length===0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

const allNote=()=>{

	return fetchNotes();
}
var readNote=(title)=>{
	var notes=fetchNotes();
	
	var readNotes=notes.filter((note)=>note.title===title);

	return readNotes[0];
}
const removeNote=(title)=>{

	//fetch notes
	let notes=fetchNotes();
	
	//filternote and remove with the title argument
	let filterNotes=notes.filter((note)=>note.title!=title);

	//save the notes array
	saveNotes(filterNotes);

	return notes.length!==filterNotes.length;
}

module.exports={
	addNote,
	allNote,
	readNote,
	removeNote,
	logNote
}