var myText = "Si tu travailles avec un marteau-piqueur pendant un tremblement de terre, désynchronise-toi, sinon tu travailles pour rien";

// En utilisant l'instruction split (regarder comment marche cette méthode sur MDN), écrit l'instruction qui permet de découper cette citation de Jean Claude Van Damme en mots distincts.
//  Stocke le résultat généré par la fonction split dans une variable nommée myTextSplit. Ensuite stocke dans une nouvelle variable nommée countWord le nombre total de mots trouvés.

// En utilisant les variables myTextSplit et countWord,
//  ajoute un traitement pour ne compter que les mots supérieurs à 2 caractères. Stocke le résultat obtenu dans une variable nommée countWordFiltered


var myTextSplit = myText.split(' ');

console.log(myTextSplit);

var countWord = myTextSplit.length;

console.log(countWord);

var countWordFiltered = [];

for ( var i=0 ; i < myTextSplit.length ; i++){
    if(myTextSplit[i].length>2){
        countWordFiltered.push(myTextSplit[i])
    }
}
console.log(countWordFiltered);
console.log(countWordFiltered.length);
