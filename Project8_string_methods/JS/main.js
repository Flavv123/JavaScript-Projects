
// This will only display 'Johnny' once the button is clicked //

function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

// This will display 'Hello World' In Uppercase // 
let text = "Hello World";
let result = text.toUpperCase();

document.getElementById("demo").innerHTML = result;

// This will display the position of the string very which is 10 //
let randomText = "This is a very random text"
let position = randomText.search("very");
document.getElementById("demo2").innerHTML = position;


// This will turn the number as a string //
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//This will format the variable x to a specifiec length. // 

function precision_Method() {
    var X = 12586.9582582394;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}