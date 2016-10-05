var args = process.argv.slice(2);
var addit = function (x,y) {
  return x + y;
}
console.log(addit(Number(process.argv[2]),Number(process.argv[3])));