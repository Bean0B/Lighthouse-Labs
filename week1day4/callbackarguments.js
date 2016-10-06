//Modify the callback function so it logs the index of the array where Waldo is found,
//ie. "Found Waldo at index 3!". (You will need to modify actionWhenFound to receive the index.)

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] == "Waldo") {
      arr.forEach(function(entry, index){
        if ( entry == "Waldo") {
      found(index);   // execute callback

    }
  })
}


function actionWhenFound(i) {
  console.log("Found Waldo at index: " + i);

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


