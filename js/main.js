let addressBook = [
	{
	firstName:"dan",
	lastName:"theman",
	cellNum:"(123)-123-1234"
	}, 
	{
	firstName:"ben",
	lastName:"randy",
	cellNum:"(123)-223-2234"
	},
];




function addContact(){
	let first = document.getElementById("firstName").value;
	let last = document.getElementById("lastName").value;
	let cell = document.getElementById("cell").value;
	let newContact = {firstName:first, lastName:last, cellNum:cell};
	addressBook.push(newContact);
	console.log(newContact);
	document.getElementById("addText").textContent = 'Contact Added: ' +
	newContact.firstName + ' ' + newContact.lastName + ' - ' + newContact.cellNum;
	document.forms[0].reset();
	return;
}
	
function searchContacts(){
	let first = document.getElementById("s-firstName").value;
	let last = document.getElementById("s-lastName").value;
	let searched =[];
	for (let i = 0; i < addressBook.length; i++) {
		if(first.toLowerCase()===addressBook[i].firstName.toLowerCase() || 
			last.toLowerCase()===addressBook[i].lastName.toLowerCase()){
			console.log(addressBook[i]);
			searched.push(addressBook[i]);
		} 	
	}
	if(searched.length===0){
		console.log("not found");
		document.getElementById("searchText").textContent = "Contact not found.";
    	document.forms[1].reset();
    	return;
	} else {
		let contacts ="";
		for (let i = 0; i < searched.length; i++) {
			contacts = contacts + searched[i].firstName + ' ' +
			searched[i].lastName + ' - ' + searched[i].cellNum + "<br/>";
		}	
		document.getElementById("searchText").innerHTML = contacts;
		document.forms[1].reset();
		return;
	}
}
