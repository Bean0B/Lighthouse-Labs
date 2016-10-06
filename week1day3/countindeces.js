
function countletters (input) {
  var noSpaces = input.replace(/ /g,'');

  var objletters = {};

  for (var i = 0 ; i < noSpaces.length; i++) {
    objletters[noSpaces[i]] = objletters[noSpaces[i]] || [];
    objletters[noSpaces[i]].push(i);
  }
  return objletters
}
console.log(countletters("lighthouse in the house"))
