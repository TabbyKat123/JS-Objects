function AddressBook(){
	this.contacts =[],//array called contacts where entries into the address book will be stored
	this.currentid= 0
}

AddressBook.prototype.addContact = function(contact){
	contact.id = this.assignid
	();
	this.contacts.push(contact);//push to add the contact provided as an argument
}


function contact(firstName, lastName, phoneNumber, email, address){
	this.firstName= firstName,
	this.lastName = lastName,
	this.phoneNumber = phoneNumber
	this.email = email
	this.address = address
}

AddressBook.prototype.findcontact = function()
contact.prototype.fullname = function(){
	return this.firstName + " " +this.lastName;
}
var AddressBook = new AddressBook();
var contact = new contact("Kitten", "Galore", "0400449020", "kittengalore@gmail.com", "namugongo");
AddressBook.addContact(contact);

AddressBook.contacts;