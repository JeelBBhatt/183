
// Budget Controller
var budgetController=(function(){

	let Expense=function(id,description,value){
		this.id=id;
		this.description=description;
		this.value=value;

	};

	let Income=function(id,description,value){
		this.id=id;
		this.description=description;
		this.value=value;

	};

	var data={
		allItems:{
			exp:[],
			inc:[]
		},
		total: {
			exp:0,
			inc:0
		}
	}

	return {

		addItem: function(type,dsc,val){
			let newItem,ID;
			//create new id 
			 if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

			//ID=data.allItems[type][data.allItems[type].length -1].id + 1;

			//create new item
			if(type==='exp')
			{
				newItem=new Expense(ID,dsc,val);
			}
			else if(type==='inc'){

				newItem=new Income(ID,dsc,val);
			}

			//push data into array 
			data.allItems[type].push(newItem);
			console.log(data);
			
			return newItem;
		}

	}

})();

// UI Controller
var UIController=(function(){

	var DOMStrings={
		inputType:'.add__type', 
		inputDescription:'.add__description',
		inputValue:'.add__value',
		inputBtn:'.add__btn',
		incomeElement:'.income__list',
		expenseElement:'.expenses__list'

	}

	return{
		getinput: function(){

			return {

				type : document.querySelector(DOMStrings.inputType).value,
				description :document.querySelector(DOMStrings.inputDescription).value,
				value :document.querySelector(DOMStrings.inputValue).value
			}
		},

		addListItem: function(obj,type){
			   var html, newHtml, element;

			   if(type==='inc'){
			   	element=DOMStrings.incomeElement;
			   	 html =  '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			   }
			   else if(type==='exp'){
			   	element=DOMStrings.expenseElement;
			   		html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			   }

			   newHtml=html.replace('%id%',obj.id);
			   newHtml=newHtml.replace('%description%',obj.description);
			   newHtml=newHtml.replace('%value%',obj.value);

			   document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
		},
		clearFields: function(){
			var fields,fieldsArr;

			fields=document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
			console.log(fields);
			fieldsArr=Array.prototype.slice.call(fields);
			console.log(fieldsArr);

			 fieldsArr.forEach(function(current,index,array){
			 	current.value="";
			 });
		},
		getDOMStrings:function(){

			return DOMStrings;
		}
	}

})();

/*-------Connect both Budget and UI controller--------*/
var appController=(function(budgetCtrl,UICtrl){

	let setUpEventListener=function(){
		let DOM=UIController.getDOMStrings();
		document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

		document.addEventListener('keypress',function(e){

			if(e.keyCode===13 || e.which===13){
				ctrlAddItem();
			}
		});

	}
	
	let ctrlAddItem=function(){
		var input,newItem;
		//-----1
		input=UIController.getinput();
		//-----2
		newItem=budgetController.addItem(input.type,input.description,input.value);
		//-----3
		UIController.addListItem(newItem,input.type);
		//-----4
		UIController.clearFields();

	};

	return{

		init:function(){

			setUpEventListener();
		}
	}
	
})(budgetController,UIController);

appController.init();

https://drive.google.com/file/d/1G1ujmiRfiuerzLFW14iNoKFEh2hLyhKs/view