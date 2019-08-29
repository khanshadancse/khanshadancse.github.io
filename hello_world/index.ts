//String

let userName: string = "Shadan";
console.log(userName);

//Number

let year: number = 2019;
console.log("Year is", year);

//Boolean

let isYear: boolean =true;
console.log("Is this 2019", isYear);

//Any

let dataDairy: any = "all data is safe";
console.log(dataDairy);

//Array

let dataValues: any[] = ["This is",2019,true];
console.log(dataValues);

//Tuples

let dataTuple: [string,number] = ["Shaadaan",83];
console.log(dataTuple);

//Enum

enum color {
    green,
    yellow,
    red 
}
let colorChoose: color = color.yellow;
console.log(colorChoose);

//Function

let hotelName: string = "Soya Point";
function hotel(): string {
    return hotelName;
}
console.log(hotel());

//Multiply Function

function multiply(value1: number,value2: number): number {
   return value1 * value2;    
}
//console.log(multiply(15,345));

//Multiply Types
let multiTypes: string = hotel();
console.log(multiTypes);
let mutliTypess = multiply(25,4);
console.log(mutliTypess);


//TypeScript Function

let addition: (s: number, y:number) => number;
addition = multiply;
console.log(addition(5,8));