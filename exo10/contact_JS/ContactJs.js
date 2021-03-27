// Objectif

// Modifier le tableau d’objets ci-dessous pour modifier le format du numéro de téléphone, créer un type de contact admin:

var contacts = [
  {
    prenom: "john",
    telephone: "0611223344",
  },
  {
    prenom: "elise",
    telephone: "0655667799",
  },
  {
    prenom: "franck",
    telephone: "0612345678",
  },
  {
    prenom: "elisa",
    telephone: "0612345678",
  },
];

// 1 -  Téléphone

// 👉 Dans ce challenge, il faut modifier les numéros de téléphone afin de les afficher en format international +33612345678.

// 👉 Le résultat doit être un nouveau tableau.

var tab = [];

for (var i = 0; i < contacts.length; i++) {
  console.log(contacts[i]);
  tab.push({
    prenom: contacts[i].prenom,
    telephone: "+33" + contacts[i].telephone.slice(1),
  });
}

console.log(tab);

// 2 -  Admin

// 👉 Modifiez votre tableau pour créer une nouvelle propriété “admin” pour chaque contact

// Cette propriété doit être à true si le contact est admin, à false sinon.

// 👉 Faire en sorte que john soit admin, les autres non.

// 👉 Le résultat doit être un nouveau tableau.

var result = [];

for (var i = 0; i < tab.length; i++) {
  if (tab[i].prenom === "john") {
    result.push({
      prenom: tab[i].prenom,
      telephone: tab[i].telephone,
      admin: true,
    });
  } else {
    result.push({
      prenom: tab[i].prenom,
      telephone: tab[i].telephone,
      admin: false,
    });
  }
}

console.log(result);
