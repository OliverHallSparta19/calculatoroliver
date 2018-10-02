
    // get the user inputs
    var value1 = prompt('enter first value');
    console.log(value1);
    var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (=)') || "a";
while (choice != "="){
    var value2 = prompt('enter the next value');

switch (choice) {
  case "s":
    var value1 = +value1 - +value2;
    console.log("- " + value2 + " = " + value1);
    break;
  case "m":
    var value1 = +value1 * +value2;
    console.log("X " + value2 + " = " + value1);
    break;
  case "d":
    var value1 = +value1 / +value2;
    console.log("/ " + value2 + " = " + value1);
    break;
  case "a":
  default:
    var value1 = +value1 + +value2;
    console.log("+ " + value2 + " = " + value1);
}
var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (=)') || "a";
}
alert(value1);
console.log("Final Answer Is " + value1);
