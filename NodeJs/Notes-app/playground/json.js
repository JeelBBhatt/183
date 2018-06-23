// // let obj={name:'jeel'};
// // let str=JSON.stringify(obj);
// // console.log(str);
// // console.log(typeof (str));

// // let str1='{"name":"jeel","age":21}';
// // let obj1=JSON.parse(str1);
// // console.log(typeof obj1);
// // console.log(obj1);

// const fs=require('fs');

// var originalNote={
// 	title : "some ttl",
// 	body : "some body"
// };
// debugger;
// let originalNoteString=JSON.stringify(originalNote);
// fs.writeFileSync("notes.json",originalNoteString);

// let noteString=fs.readFileSync("notes.json");
// let note=JSON.parse(noteString);

// console.log(typeof note);
// console.log(note.title);

var user={

	name:'Jeel11',
	year:1997,
	cal (){

		console.log(this.name);
	}
}
user.cal();