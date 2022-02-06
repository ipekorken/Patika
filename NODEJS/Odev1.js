const arguments = process.argv.slice(2);
let r = arguments[0];
function calcAreaCircle(r) {
  if (r > 0) {
    console.log(`Yarıçapı ${r} olan dairenin alanı:`, Math.PI * r * r);
  }
}
calcAreaCircle(r);
