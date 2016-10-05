var numbers = process.argv.slice(2)



var total = 0

console.log(total);

function sum(numbers)
  var total = 0
  for(var i = 0; i < numbers.length; i++) {
  console.log("index:", i);
  console.log("value:", numbers[i])

  var number = Number(numbers[i]);
  if ( isNaN(number) === false) {
    total += number;
  }
  total += number;
}
}
return total;
}