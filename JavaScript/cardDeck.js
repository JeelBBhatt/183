
var suits=["spades","hearts","clubs","diams"];
var cardFaces=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
// var cards=[];
 var players=[];


function startDeal(){

	var numbers=Number(document.getElementById("cardNo").value);
	for (i = 0; i < numbers; i++) {
                players[i] = [];
            }
	var cards=buildCards();
	shuffleCards(cards);
	deck(cards);
console.log(players);
}

function buildCards(){
	cards=[];
	for(s in suits){
		var bgColor=(suits[s]=="hearts" || suits[s]=="diams")? "red":"black";
		for(cf in cardFaces)
		{
			var card={suit:suits[s],num:cardFaces[cf],bgColor:bgColor};
			cards.push(card);
		}
	}
	return cards;

}

function shuffleCards(crd){
	
	for(var i=crd.length-1;i>0;i--){
		var randNumber=Math.floor(Math.random() * (i+1));
		var temp=crd[i];
		crd[i]=crd[randNumber];
		crd[randNumber]=temp;
	}
	return crd;
}
function deck(c){

	 var num=players.length;
	 var message = document.getElementById("message");
    for (var i = 0, p = 0; i < c.length; i++) {
                 players[p].push(c[i]);
                 p++; 
                 if (p >= num) {
                     p = 0;
                 }
             }
            for (var x = 0; x < num; x++) {
                message.innerHTML += "<BR>Player : " + (x + 1) + "<br>";
                for (var i = 0; i < players[x].length; i++) {
                    message.innerHTML += "<span style=\"color:" + players[x][i].bgColor + "\">" + players[x][i].num + "&" + players[x][i].suit + "; </span>";
                }
                message.innerHTML += "<BR>";
            }
}