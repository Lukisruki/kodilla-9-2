var nameMale = ['Jan', 'Tomek', 'Kuba'],
    nameFemale = ['Kasia', 'Aga', 'Ewa'];
var allNames = nameMale.concat(nameFemale);

var newName = 'Marian';
allNames.splice(0, 0, newName);
    
console.log(allNames);