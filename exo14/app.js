

// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va retourner une phrase. 
// Créez une fonction retourneLaPhrase qui va le faire !
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
// Bonne chance.

// ----------------- CONSEILS -----------------

// La fonction join(), permet de transformer un tableau en chaine de caractère.
// La fonction split(), permet de transformer une chaine de caractère en tableau.
// La fonction reverse(), permet de retourner les éléments d'un tableau.

// text = "bonjour a tous"
// var retour = text.split("").reverse().join("")

// console.log(retour);

function retourneLaPhrase (texte){
    var result = texte.split("").reverse().join("");
    return result
}
console.log(retourneLaPhrase("bonjour a tous"));