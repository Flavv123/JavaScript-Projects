function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;

    // This will tell you whether you are tall enough or not when inputing your age //
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride +" to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}

// We are declaring 3 variables, Jack, Emily and Erik //

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle( "Jeep", "Trail Hawk",2019, "White and Black");
var Erik = new Vehicle( "Ford", "Pinto", 1971 , "Mustard");
function myFunction() {

    // This will output the Vehicle color and Model and the year in which it wasa manufactured //

    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + "manufactured in " + Erik.Vehicle_Year;
}

// This will output a syntax Error 'unexpected token 'typeof' // 



  function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count () {
        var Starting_point = 10;
        // This will add 1 to the number 10 //
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }

}


