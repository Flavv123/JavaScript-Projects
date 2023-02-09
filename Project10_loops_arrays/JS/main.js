
// This will execut a loop of numbers from 1 to 10 //

function Call_Loop(){
    var Digit = "";
    var x = 1;
    while ( x < 11) {
        Digit +=  "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// This will result an array of instruments from Guitar to Violin //

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin"]
var Content = "";
var Y;
function for_Loop(){
    for ( Y= 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";

    }
    document.getElementById("List_of_Instruments").innerHTML = Content;

}

// This will result - "In this picture, the cat is eating"//
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2]
}

// This will result - The cost of the guitar is $900 //
function constant_function() {
    const Musical_Instrument = {type: "guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;

}

let x = 40;
document.write("<br>" + x);


// This will display - The car is a 2021 red Dodge Viper //
let car = {
    make: " Dodge",
    model: " Viper",
    year: " 2021",
    color: " red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model
    }
};
document.getElementById("Car_Object").innerHTML = car.description();