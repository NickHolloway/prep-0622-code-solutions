function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function converthourstominutes(x) {
  return x * 60;
}

var minutes = converthourstominutes(4);
console.log('minutes', minutes);

function addandmultiplyby5(x, y) {
  return (x + y) * 5;
}

var product = addandmultiplyby5(2, 4);
console.log('product', product);

function multiplyanddivideby5(x, y) {
  return x * y / 5;
}

var quotient = multiplyanddivideby5(10, 15);
console.log('quotient', quotient);

function subtracttwonumbers(x, y) {
  return x - y;
}

var difference = subtracttwonumbers(10, 9);
console.log('difference', difference);

function getcirclecircumference(radius) {
  return 2 * 3.14 * radius;
}

var circumference = getcirclecircumference(5);
console.log('circumference', circumference);

function getfullname(firstname, lastname) {
  return firstname + lastname;
}

var firstname = 'Nick';
var lastname = 'Holloway';
var fullname = getfullname(firstname, lastname);
console.log('fullname', fullname);

function cube(x) {
  return x * x * x;
}

var cubed = cube(5);
console.log('cubed', cubed);
