var fruits = ['pommes', 'poires', 'bananes']
console.log(fruits);

var contact = ['Vanessa', 'Hugo', 'Michael']
console.log(contact[2]);

var contact = ["Vanessa", "Hugo", "Michael"];
contact[2] = 'Léo'
console.log(contact);

var contact = ["Vanessa", "Hugo", "Michael"];
console.log(contact.length);
console.log(contact[contact.length-1]);

var contact = ["Vanessa", "Hugo", "Michael"];
contact.unshift('Jules')
console.log(contact);
contact.push('Marion')
console.log(contact);

var contact = ["Vanessa", "Hugo", "Michael", "Léo"];
contact.pop()
contact.pop()
console.log(contact);
contact.shift()
console.log(contact);
console.log(contact.length);
