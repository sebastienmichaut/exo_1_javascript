Exercice Javascript
1.)
Créer une boucle qui va tourner 5 fois en utilisant pour compteur de
boucle une variable nommée i initialisée à 0
Cette boucle devra afficher la phrase "1 tour de boucle" en utilisant
console.log
Concaténer la variable i au début de la chaîne de caractères .
Penser à mettre un espace entre la première lettre de la chaîne de
caractères et le guillemet. (Changer le 1 de “1 tour de boucle” pour
que ça corresponde exactement au tour de boucle. Soit “1 tour de
boucle” , ensuite “2 tour de boucle” ,“3 tour de boucle”, etc…)
Au début du programme créée une variable contact , elle contient
un tableau avec les valeurs suivantes : Vanessa, Hugo, Michael,
Léo, John.
Une boucle pourrait nous servir à parcourir l’intégralité des
prénoms enregistrés dans ce tableau.
Modifier la boucle pour que le code puisse afficher la phrase "1
tour de boucle Vanessa", "1 tour de boucle Hugo", "2 tour de
boucle Michael" ...
Nous avons utilisé la variable i en tant qu’indice du tableau, ce
qui nous a permis de lire la totalité du contenu du tableau. En
effet elle est passée progressivement de 0 à 4 ce qui correspond
aux indices du tableau contact
Améliorons encore cette approche pour éviter d'avoir à modifier
les conditions de la boucle a chaque fois que le tableau évolue.
Remplacer le chiffre 5 de la condition de la boucle par
l’instruction permettant de récupérer la longueur du tableau
contact

2.)
Créez une variable playlist contenant “Katy Perry - Chained To The
Rhythm” , "Ed Sheeran - Shape of You" , "Maroon 5 - Don't Wanna
Know"
En utilisant la variable playlist définissez une condition qui affiche
dans la console le message suivant "Attention il ne vous reste plus
que 3 titres" s'il y a un nombre de titres inférieur à 4.