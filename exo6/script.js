var students = ['Antoine Gobert', 'Joe David', 'Jacky Miel', 'Asterix Gravier', 'John Doe']

// for ( var i = 0; i < students.length; i++){
//     students[i] ='disparu'
// }

// console.log(students);

// for ( var i = 0; i <students.length; i++){
//     students[i] = students[i][0] + '...'
// }

// console.log(students);

var newTab = []
for ( var element of students){
    console.log(element);
    newTab.push(`${element[0]}...`)
}
    console.log(newTab);