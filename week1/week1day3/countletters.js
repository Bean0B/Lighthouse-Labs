//our function countLetters needs to return an object that
// can represent the stats for the sentence it is given:
//all the characters found in the input string,
//and their respective counts.

// var originalword = "light house in the house"
// var splitsquish = originalword.replace(/ /g,'');
// console.log(splitsquish);

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
// var counts = {};

// for (var i = 0 ; i < noSpaces.length; i++) {
// ch = noSpaces.charAt(i);
// count = counts[ch]
// counts[ch] = count ? count + 1 : 1;
// }

// for (ch in counts) {
//   console.log(counts[ch])
// }
// count = counts[ch]
// counts[ch] = count ? count + 1 : 1;
// }
// for (ch in counts) {
//   console.log(ch + " count: " + counts[ch]);
// }










