/********************* DOM ***********************/
// console.dir(document);
 // var op=document.getElementById("divId");
// console.log(op);

// op.innerHTML="heelo Jeel";
// op.innerHTML="heelo Jeel <br> Welcome here";
//op.innerText="heelo Jeel <br> Welcome here";
// var q=prompt("What is your name??");
// //document.write("Welcome"+q);
// op.innerText ="Welcome "+ q;

/*********************Javascript Logic Statements ***********************/
// var q=prompt("What is your name?");
// var name=["jeel","kk","jj"];
// var index=name.indexOf(q);
// //op.innerText=index>-1? (alert("hello"),"Welcome " + q):"Not Exist"
// var a=""
// if(index>-1)
// {
// 	a="welcome";
// 	var qa=prompt("What is your age?");
// 	a=a+ (qa>18 ? "you are over 18":"You Are ander 18");
// }
// else{
// 	a="Not Exist";
// 	//op.innerText="Not Exist"
// }
// op.innerText= a+" " + q;
//op.innerText ="Welcome "+ q;

// var q=prompt("What is time?");
// if(q>8 && q<12)
// {
// op.innerHTML ="Welcome it'morning"
// }
// else if(q>=12 && q<16){
// op.innerHTML ="Welcome it's afternoon"
// }
// else if(q>=16 && q<20){
// op.innerHTML ="Welcome it's evening"
// }
// else{
// op.innerHTML ="Welcome it's night"
// }

// var q=prompt("What is time?");
// switch(Number(q))
// {
// 	case 8:
// 		a="Welcome it'morning";
// 		break;
// 	case 12:
// 		a ="Welcome it's afternoon";
// 		break;
// 	case 16:
// 		a ="Welcome it's evening";
// 		break;
// 	case 23:
// 		a ="Welcome it's night";
// 		break;
// 	default:
// 		alert("Give Proper Input");
// }
// op.innerHTML =a;

 // var html = "something went wrong";
 //        var output = document.getElementById("divId");
 //        var question = prompt("heads or tails");
 //        var result = question == "heads" ? 1 : 0;
 //        var randomNumber = Math.floor(Math.random()*2);
 //        if(result == randomNumber) {
 //            html = "yes guessed correctly";
 //        }else{
 //            html = "you were wrong";        
 //        }
 //        output.innerHTML = html;
//  var output = document.getElementById("divId");
//  var question = prompt("heads or tails");
// var randomNumber=Math.floor(Math.random()*6);


// var output = document.getElementById('divId');
//         var player = prompt("Do you choose Rock Paper or Scissors?");
//         var ps = player.charAt(0).toUpperCase();
//         var win = false;
//         var computer = Math.random();
//         if (computer < 0.34) {
//             computer = "Rock";
//         }
//         else if (computer < 0.67) {
//             computer = "Paper";
//         }
//         else {
//             computer = "Scissors";
//         }
//         var cs = computer.charAt(0).toUpperCase();
//    var html = "";

//    if (cs == ps) {
//             html += "Its a Tie";
//         }
//     else {
//             if (ps == "R") {
//                 player = "Rock";
//                 if (cs == "S") {
//                     win = true;
//                 }
//             }
//             else if (ps == "P") {
//                 player = "Paper";
//                 if (cs == "R") {
//                     win = true;
//                 }
//             }
//             else {
//                 player = "Scissors";
//                 if (cs == "P") {
//                     win = true;
//                 }
//             }
//             if (win) {
//                 html += " You Win";
//             }
//             else {
//                 html += " You Lost";
//             }
//         }
//         output.innerHTML = "You      vs    Computer<br>" + player + " vs " + computer + "<br>" + html;

 // var op=document.getElementById("divId");

 // var names={a:"jeel",b:"chhaya"};


 // for(var i in names){
 //    op.innerHTML += names[i]+"<br>";
 // }

  var op=document.getElementById("divId");


 // for(var i in document){
 //     op.innerHTML += document[i]+"<br>";
 //  }
 var shoppingList=[];
 var x=1;
 var itemsNo=prompt("no of items want to add??");
while(x <=Number(itemsNo)){
var items=prompt("What do you want??");
shoppingList.push(items);
x++;
}

 for(var i in shoppingList){
     op.innerHTML += shoppingList[i]+"<br>";
  }
