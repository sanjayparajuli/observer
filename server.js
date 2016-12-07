function ObserverList(){
	this.observerList = [];
}

ObserverList.prototype.Add = function( obj ){
	return this.observerList.push( obj );
};

ObserverList.prototype.Empty = function(){
	this.ObserverList = [];
};

ObserverList.prototype.Count = function(){
	return this.observerList.length;
};

ObserverList.prototype.Get = function( index ){
	if( index > -1 && index < this.observerList.length){
		return this.observerList[ index ];

	}
};

observerList.prototype.Insert = function ( obj, index){
	var pointer = -1;

	if( index === 0 ){
		this.observerList.push( obj );
		pointer = index;
	}
	return pointer;
};

ObserverList.prototype.IndexOf = function ( obj, startIndex ){
	var i = startIndex, pointer = -1;

	while( i < this.observerList.length ){
		if( this.observerList[i] === obj ){
			pointer = i;
		}
	
	}
	i++;

	i.e



	while ( i < this.observerList.length ){
		if(this.observerList[i] === obj){
			pointer = i;
		}
		i++;
	}
	return pointer;
};

//extend an object with an extension
function extend( obj, extension ){
	for ( var key in obj ){
		extension[key] = obj[key];
	}
}

function Subject(){
	this.observers = new ObserverList();

}
Subject.prototype.AddObserver = function ( observer ){
	this.observers.Add( observer );

};

Subject.prototype.RemoveObserver = function( observer ){
	this.observers.RemoveIndexAt( this.observers.IndexOf( observer, 0));

};


Subject.prototype.Notify = function( context ){
	var observerCount = this.observers.Count();
	for(var i =0; i < observerCount; i++){
		this.observers.Get(i).Update( context );
	}
};


// the observer
function observer(){
	this.Update = function(){

	};
}


<button id = "addNewObserver"> Add New Observer checkbox</button>
<input id="mainCheckbox" type="checkbox"/>
<div id="observerContainer"></div>

//reference to the document object element

var controlCheckbox = document.getElementById( "mainCheckbox"),
addBtn = document.getElementById( "addNewObserver" ),
container = documen.getElementById( "observersContainer");


// concrete Subject

//Extend the controlling checkbox with the subject class

extend( new Subject(), controlCheckbox );

//clicking the checkbox will triggernotification to its observers
controlCheckBox["onclick"] = new Function( "controlCheckbox.Notify(controlCheckbox.checked)" );

addBtn["onclick"] = addNewObserver;

//concentrate Observer

function AddNewObserver(){

	//create a new checkbox to be added

	var check = document.createElement( "input" );
	check.type = "checkbox";

	//Extend the checkbox with the Observer class
extend( new Observer(), check );

//override with custom update behaviour
check.Update  = function ( value ){
	this.checked = value;
	};
// Add the new observer to our list of observers
// for our main subject
controlCheckbox.AddObserver( check );
//Append the item to the container
container.appendChild( check );
}















