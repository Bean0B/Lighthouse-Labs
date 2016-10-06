
function countletters (input) {
var noSpaces = input.replace(/ /g,'');

var objletters = {};

for (var i = 0 ; i < noSpaces.length; i++) {
 // lighthouse[i]
  //console.log(noSpaces[i]);
  objletters[noSpaces[i]] = 0 ;
}

for (var i = 0 ; i < noSpaces.length; i++) {
  objletters[noSpaces[i]] = objletters[noSpaces[i]] + 1;
}
return objletters
}
console.log(countletters("lighthouse in the house"))