// Exercise one-----------------------------------------------

var num1 = prompt('Enter A Number!');

var total = 0;

for (var x = 1; x < num1; x++) {
  total = total + x;
}

console.log(total);



// Exercise two --------------------------------------------
var answer = 'yes'
var number = 0;
do {
  if (number > 0 ) {
    answer = prompt('Would you like to play again?');
    if (answer == 'yes') {
      word = prompt('What word would you like to add?')
      output = output + ' ' + word
      console.log(output)
      number = number + 1
    } else {
      answer = 'no'
    }
  } else {
    if (answer == 'yes') {
    output = prompt('What word would you like to start with?')
    console.log(output)
    number = 1
  } else {
    answer = 'no'
    }
  }
} while ( answer == 'yes' )

// Exercise three------------------------------------------


var line = 'My name is '
var mark = 0
var name = 'Zavier'
var answer = 'yes'
while (answer == 'yes') {
  var answer = prompt('Would you like to print your name?');
  if (answer == 'yes') {
      mark = mark + 1
      if (mark != 1) {
        line = line + '!'
      } else {
        line = line + name
      }
        console.log(line);
      }
    }

//Exercise Four ---------------------------------------------

var timeOfDay = prompt('What time of day is it?');


if (timeOfDay.toUpperCase() === 'MORNING') {

  console.log("If it's morning, Why not some breakfeast? Eggs and bacon are always the tasty.");
} else if (timeOfDay.toUpperCase() === 'NOON') {
  console.log("if it's noon, Why not lunch? Have a salad if you want to lose a few pounds.");
} else {
  console.log("if it's evening, not dinner? Stake and potatoes should fill you up!");
}
