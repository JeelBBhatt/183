/*******************Random Names*********************/

// var a=["wonderfull","super","beautifull"]
// //var ranNum=Math.floor(Math.random()*3)
//  var op=document.getElementById("divId");
// function myFun1(){
// 	var q=prompt("Name?");
// 	var ranNum=Math.floor(Math.random()* a.length)
// 	 op.innerHTML +=a[ranNum]+" "+ q;
// }

/**********************crack Code************************/
 // var cCode = [];
 //        var count = 0;
 //        var output =  document.getElementById("output");
 //        var c1 = document.getElementById("code1");
 //        var c2 = document.getElementById("code2");
 //        var c3 = document.getElementById("code3");
 //        for(var x=0;x<3;x++){
 //            cCode.push(Math.floor(Math.random() * 9));
 //        }

 //        function crack(){
 //        	count=0;
 //        	var guess = [c1.value,c2.value,c3.value];
 //            for(var x=0; x <cCode.length; x++){
 //                output.innerHTML += checkNum(guess[x],cCode[x]);
 //            }
 //            if(count == 3){
 //                output.innerHTML += " You Guessed it <br>";
 //            }else{
 //                output.innerHTML += "<br>";
 //            }
 //        }


 //        function checkNum(a,b){
 //        	if(a>b) return "L";
 //        	if(a<b) return "H";
 //        	if(a==b) 
 //        	{
 //        		count++;
 //        		return a;
 //        	}
 //        }


 /****************Anonymous and self invoking function************/
// var output =  document.getElementById("output");
//  var a=function(c){
//  	output.innerHTML="Welcome"+" "+ c;
//  }


  // var a = " World";
  //       var output = document.getElementById("output");
  //       (function () {
  //           var a = "Hello";
  //           output.innerHTML = a;
  //       })();
  //       output.innerHTML += a;

        //  var secretWord = ["JavaScript", "html", "css", "website"];
        // var output = document.getElementById("output");

        // function start() {
        //     shuffleArray(secretWord);
        //     output.innerHTML += secretWord + "<br>";
        // }

        // function shuffleArray(arr) {
        //     for (var x = arr.length - 1; x > 0; x--) {
        //         var holder = Math.floor(Math.random() * (x + 1));
        //         var temp = arr[x];
        //         arr[x] = arr[holder];
        //         arr[holder] = temp;
        //     }
        //      return arr;
        // }

// var a=[1,1,1,2,5,8,9,6,1,"a","b","a","c",1,4,2,5,8,1];
// var output = document.getElementById("output");
// var myAry=dup(a);
// output.innerHTML = myAry;
// function dup(arr){

// 	var result=[];
// 	var obj={};

// 	for(var x=0;x<arr.length;x++){
// 		obj[arr[x]]="XXXXXXXX";
// 	}
// 	console.log(obj);
// 	for(var x in obj){
// 		result.push(x);
// 	}
// 	return result;
// }
//var output =  document.getElementById("output");
// var shoppingList=[];
// function additem(){
// 	var additems=document.getElementById("item").value;
// 	shoppingList.push(additems);
// 	outputList();

// }
// function outputList()
// {output.innerHTML="";
// 	for(var x=0;x<shoppingList.length;x++){
// 		output.innerHTML +=shoppingList[x]+ "<br>";
// 	}
// 	//output.innerHTML =html;
// }

// function myFun1(s1,s2,callback){
//  output.innerHTML= callback(s1,s2);
// }

// myFun1("Welcome","jeel",function(s1,s2){
// 	return s1+s2+".....";
// })



/*************************************Interactive DOM*****************************************/

//var output=document.getElementById("output");
// var myTimer;
// function goback(){
// 	window.history.go(-1);
// }
// window.onload=function(){
// alert("11111>>>>>>>>>>");
// }
// function myFun(t){
// //output.innerHTML=t.value + "<br>" + t.id;
// alert(">>>>>>>>>>>>>>>>>>>");
// }

//output.innerHTML=document.form1.url.value;


// function start(){
// 	// myFun();
// 	// myTimer=window.setTimeout(start,1000);
// 	window.location="https://www.google.com";
// }
// function clearInt(){
// 	//window.clearInterval(myTimer);
// 	output.innerHTML=document.form1.url.value;
// 	//window.location="https://www.gmail.com";
// }
// myTimer=window.setTimeout(myFun,5000);
// // (function(){
// // 	myTimer=window.setTimeout(myFun,5000);
// // })();
// function myFun(){
// 	alert("Welcom jeel");
// 	output.innerHTML="Welcom jeel";
// }

// output.innerHTML=navigator.userAgent;


//var output=document.getElementById("output");

// var imagePlace=-1;
// var images=["1","2","3","4","5","6"];
// var imageC=["111","00FF00","FFFF00","0000FF","241"];

// // function myFun(){
// //   imagePlace++;
// //   var output=document.getElementById("myImage");
// //   output.src="http://via.placeholder.com/350x150/" + imageC[imagePlace]+ "/fff?text=Image" + images[imagePlace];
// // }

// function myFun(){
// imagePlace++;
// if(imagePlace>=images.length){
//     imagePlace=0;
//   }
//   var output=document.getElementById("myImage");
//   output.src="http://via.placeholder.com/350x150/" + imageC[imagePlace]+ "/fff?text=Image" + images[imagePlace];

// }

// function intervalImg(){
//   setInterval(myFun,2000);
// }

// function checkNo(){
// message(event.key);
// return (!isNaN(event.key));
// }
// function checkChar(){
// message(event.key);
// return (isNaN(event.key));
// }

// function message(m){
// output.innerHTML=m;
// }
// function validation(){
//  var fname=event.target.children;
//  if(fname.firstName.value=='')
//  {
//     alert("enter fname");
//     return false;
//  }
//  if(fname.lastName.value=='')
//  {
//     alert("enter lname");
//     return false;
//  }
//  if(fname.age.value=='')
//  {
//     alert("enter age");
//     return false;
//  }
//  else
//   return true;
// }


/***======================Game========================********/
// var myArr=[];
// var names=["KK","Pinkal","Leah","Riddhi","Tina","Raj"];
// var key;
// var findP=document.getElementById("result");
// var result=document.getElementById("result1");
// function start(){
//   myArr=names.slice();
//   myArr.sort(function(){
//     return  0.5- Math.random();
//   });
//   console.log(myArr);
//   buildBoard();
//   findName();
// }

// function buildBoard(){
//   var html="<h1>Game</h1>";
//   for(var x=0;x<myArr.length;x++){
//     var str=myArr[x];
//     var shuffle=str.split('').sort(function(){
//       return  0.5- Math.random();
//     }).join('');

//     //ml +='<div class="box" onmouseover="uText(this,\''+shuffle+'\')" onmouseout="uText(this,\'Hidden'+(x+1)+' \')" onclick="click(this,\''+str+'\')"> Hidden'+(x+1)+'</br>'+'</div>';
//     html += '<div class="box" onmouseover="uText(this,\'' + shuffle + '\')" onmouseout="uText(this,\'Hidden ' + (x + 1) + '\')" onclick="clickP(this,\'' + str + '\')" >Hidden ' + (x + 1) + '</div>';
//   }
//   document.getElementById("output").innerHTML=html;
// }

// function uText(t,m){
//   t.innerHTML=m;
// }
// function findName(){
//  key=myArr[Math.floor(Math.random()* myArr.length)];
//  findP.innerHTML="Find the Person : "+key;
// }
// function clickP(t,s){
//   if(s==key)
//   {
//     var index=myArr.indexOf(s);
//     t.parentNode.removeChild(t);
//     myArr.splice(index,1);
//     result.innerHTML="correct";
//     console.log(myArr);
//     findName();
//   }
//   else{
//     result.innerHTML="Wrong";

//   }
//   if (myArr.length <= 0) {
//     result.innerHTML="GAME OVER";
//   }
// }

//var imgHolder = "http://via.placeholder.com/350x150/ffff00/fff?text=Image10";

