// Calcualtes 2 numbers //

function Function_Calc() {

    var num1 = 5;
    var num2 = 6;
    var result = num1 + num2;
    document.getElementById("Math").innerHTML = result;

}

// Subtract Operator //

function Subtract() {
    var subtract = 5 - 2;
    document.getElementById("Subtract").innerHTML = "5 -2 = " + subtract;

}

// Multiplication Operator //


function Multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiplication").innerHTML = "6 x 8 = "  + simple_Math;
}

// Division Operator //

function Division() {
    var simple_Math = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = "  + simple_Math;
}

// Remainder Operator // 

function Remainder() {
    var simple_Math = 32 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 32 by 6 you have a remainder of "  + simple_Math;
}

// Negation Operator //

function negation_Operator() {
    var x = 15;
    document.getElementById("Negation").innerHTML = -x;

}
// The result is 7 // 
var x = 6;
x++;

// The result is 6 // 
var x = 7;
x--;
document.write(x);

// will alert a random number when opening the file in the browser //

window.alert(Math.random());

// will alert a random number  * 100 when opening the file in the browser //

window.alert(Math.random() * 100);

// Returns a random integer between 0 and 9 //

 document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 10);


