// Objectif

// Formater une liste de prénom (première lettre en majuscule):

var contacts = ["john", "vanessa", "FRANCK", "aNTOINE"];

// 👉 Vous devez modifier le tableau ci-dessus pour mettre la première lettre de l'ensemble des prénoms en majuscule et le reste en minuscule.

// 👉 Le résultat doit être un nouveau tableau:  ["John", "Vanessa", "Franck"].

var newTab = []
for (var i = 0 ; i < contacts.length ; i++){
    newTab.push(contacts[i][0].toUpperCase() + contacts[i].toLowerCase().slice(1));
}
console.log(contacts);
console.log(newTab);

var newTab = []
for (var element of contacts){

    newTab.push(element[0].toUpperCase() + element.toLowerCase().slice(1));
}
console.log(newTab);