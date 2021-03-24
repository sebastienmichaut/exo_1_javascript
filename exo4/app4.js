var contact = {
    prenom : 'Vanessa',
    phone : '0612345678',
    email : 'vanessa@gmail.com',
};
console.log(contact);
console.log(JSON.stringify(contact));

var contact = {
  prenom: "Vanessa",
  phone: "0612345678",
  email: "vanessa@gmail.com",
};
console.log(contact['prenom']);
console.log(contact.email);

var contact = {
  prenom: "Vanessa",
  phone: "0612345678",
  email: "vanessa@gmail.com",
};
contact.nom = 'Doe'
console.log(JSON.stringify(contact));

var contact2 = [
    {
  prenom: "Vanessa",
  phone: "0612345678",
  email: "vanessa@gmail.com",
}];

contact2.push (
  {nom: "Anna",
  phone: "0123456789",
  email: "anna@gmail.com",
  });
console.log(JSON.stringify(contact2));