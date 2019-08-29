"use strict";
//String
var userName = "Shadan";
console.log(userName);
//Number
var year = 2019;
console.log("Year is", year);
//Boolean
var isYear = true;
console.log("Is this 2019", isYear);
//Any
var dataDairy = "all data is safe";
console.log(dataDairy);
//Array
var dataValues = ["This is", 2019, true];
console.log(dataValues);
//Tuples
var dataTuple = ["Shaadaan", 83];
console.log(dataTuple);
//Enum
var color;
(function (color) {
    color[color["green"] = 0] = "green";
    color[color["yellow"] = 1] = "yellow";
    color[color["red"] = 2] = "red";
})(color || (color = {}));
var colorChoose = color.yellow;
console.log(colorChoose);
//Function
var hotelName = "Soya Point";
function hotel() {
    return hotelName;
}
console.log(hotel());
//Multiply Function
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(15,345));
//Multiply Types
var multiTypes = hotel();
console.log(multiTypes);
var mutliTypess = multiply(25, 4);
console.log(mutliTypess);
//TypeScript Function
var addition;
addition = multiply;
console.log(addition(5, 8));
