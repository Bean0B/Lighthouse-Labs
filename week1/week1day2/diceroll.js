var myArg = process.argv[2];




var array = [];

function rollDice(stringNum){

for(var i = 0; i < stringNum; i++){



    var mathNumber = Math.floor(Math.random() * (6)) + 1;
    array.push(mathNumber);
}return array;

}
var list = [];
function joinList(concepts){
for(var i = 0; i<concepts.length; i++){
  if(i === concepts.length -1){
    list += concepts[i];
  } else { list += concepts[i] + ", "}
}
return list;
}


rollDice(myArg);
joinList(array);
console.log("Rolled " + myArg + " dice: " + list + ".");