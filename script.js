const regularExpression = /^A(CFP)?((PT)X+(TP)N?)+N$/gi;
let btnValue = document.getElementById('get-value');
let container = document.getElementById('container');
btnValue.addEventListener('click', compareValues);

function compareValues() {
	let givenValue = prompt("Waiting for engine schematics");
	if(regularExpression.test(givenValue)) {
		let container = document.getElementById('container');
		let para = document.createElement("P");                      
		let t = document.createTextNode("Success! You have created a rocket!"); 
		para.appendChild(t);                                          
	} else {
		console.log(false)
	}
}