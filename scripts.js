// Exercise one-----------------------------------------------

/*var num1 = prompt('Enter A Number!');
var total = 0;

for (var x = 1; x < num1; x++) {
  total = total + x;
}

console.log(total); */

// Exercise two --------------------------------------------



var mark = -1
var current = -1
var line = 'My name is'
var name = 'Zavier'
var answer = 'yes'

while ( answer == 'yes') {
var answer = prompt('Would you like to print your name?');
if ( answer == 'yes' ) {

while(current < mark) {
  current = current +1
  if (mark != 0) {
    line = line + '' + name + '!'
  }
  alert(line);
}
}

}


// Exercise three------------------------------------------

var name = prompt('Would you like to print your name?');
var nameAgain = prompt('Would you like to print your name again?')

while (name == 'yes') {

}

console.log('Hello, my name is' + name)

//Exercise Four ---------------------------------------------

var timeOfDay = prompt('What time of day is it?');

if (timeOfDay.toUpperCase() === 'MORNING') {
  console.log("If it's morning, Why not some breakfeast? Eggs and bacon are always the tasty.");
} else if (timeOfDay.toUpperCase() === 'NOON') {
  console.log("if it's noon, Why not lunch? Have a salad if you want to lose a few pounds.");
} else {
  console.log("if it's evening, not dinner? Stake and potatoes should fill you up!");
}
*/
